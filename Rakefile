# Tasks for creating derivatives for spec-lumber blog, modified from collectionbuilder-sa 

###############################################################################
# TASK: dev
###############################################################################

desc "Build site with quick devlopment _config_dev.yml"
task :dev do 
  exec("bundle exec jekyll s -i --config _config_dev.yml")
end

###############################################################################
# TASK: deploy
###############################################################################

desc "Build site with production env"
task :deploy do
  ENV["JEKYLL_ENV"] = "production"
  exec("bundle exec jekyll build")
end

###############################################################################
# Helper Functions
###############################################################################

$ensure_dir_exists = ->(dir) { if !Dir.exists?(dir) then Dir.mkdir(dir) end }

def prompt_user_for_confirmation message
  response = nil
  while true do
    # Use print instead of puts to avoid trailing \n.
    print "#{message} (Y/n): "
    $stdout.flush
    response =
      case STDIN.gets.chomp.downcase
      when "", "y"
        true
      when "n"
        false
      else
        nil
      end
    if response != nil
      return response
    end
    puts "Please enter \"y\" or \"n\""
  end
end

###############################################################################
# TASK: generate_derivatives
#
# this task assumes you put scanned objects in objects/archives folder
# newly added objects are then processed (filenames downcased, tifs to jpgs), copied to objects/
# and generates small and thumb image for image and pdf objects
#
###############################################################################

desc "Generate derivative image files from collection objects"
task :generate_derivatives, [:thumbs_size, :small_size, :density, :missing, :im_executable] do |t, args|
  args.with_defaults(
    :thumbs_size => "300x300",
    :small_size => "800x800",
    :density => "300",
    :missing => "true",
    :im_executable => "magick"
    #:im_executable => "convert"
  )

  # set the various directories to be used
  archives_dir = "objects/archives"
  objects_dir = "objects"
  thumb_image_dir = "objects/thumbs"
  small_image_dir = "objects/small"

  # Ensure that the output directories exist.
  [thumb_image_dir, small_image_dir].each &$ensure_dir_exists

  # support these file types
  EXTNAME_TYPE_MAP = {
    '.tiff' => :image,
    '.tif' => :image,  
    '.jpg' => :image,
    '.png' => :image,
    '.pdf' => :pdf
  }

  # Generate derivatives.
  Dir.glob(File.join([archives_dir, '*'])).each do |filename|
    # Ignore subdirectories.
    if File.directory? filename
      next
    end
    # Ignore readme.
    if filename == File.join([archives_dir, 'README.md'])
      next
    end

    # Get the lowercase filename without any leading path and extension.
    extname = File.extname(filename).downcase
    base_filename = File.basename(filename)[0..-(extname.length + 1)].downcase

    # Determine the file type and skip if unsupported.
    file_type = EXTNAME_TYPE_MAP[extname]
    if !file_type
      access_filename=File.join([objects_dir, "#{base_filename}#{extname}"])
      puts "Skipping conversion of file with unsupported extension: #{extname}."
      if args.missing == 'false' or !File.exists?(access_filename)
        puts "Copying #{filename} to objects dir for access as #{access_filename}."
        system("cp #{filename} #{access_filename}")
      end
      next
    end

    # Define the file-type-specific ImageMagick command prefix.
    cmd_prefix =
      case file_type
      when :image then "#{args.im_executable} #{filename}"
      when :pdf then "#{args.im_executable} -density #{args.density} #{filename}[0]"
      end

    # Generate or copy the access image.
    if extname == ".tif" || extname == ".tiff"
      access_filename=File.join([objects_dir, "#{base_filename}.jpg"])
      if args.missing == 'false' or !File.exists?(access_filename)
        puts "Creating #{access_filename}"
        system("#{cmd_prefix} -flatten #{access_filename}")
      else
        puts "Skipping existing file"
      end
    elsif extname == ".pdf"
      access_imagefilename=File.join([objects_dir, "#{base_filename}.jpg"])
      access_filename=File.join([objects_dir, "#{base_filename}#{extname}"])
      if args.missing == 'false' or !File.exists?(access_filename)
        puts "Creating #{access_imagefilename}"
        system("#{cmd_prefix} -flatten #{access_imagefilename}")
        puts "Copying #{filename} to objects dir for access as #{access_filename}."
        system("cp #{filename} #{access_filename}")
      else
        puts "Skipping existing file"
      end      
    else
      access_filename=File.join([objects_dir, "#{base_filename}#{extname}"])
      if args.missing == 'false' or !File.exists?(access_filename)
        puts "Copying #{filename} to objects dir for access as #{access_filename}."
        system("cp #{filename} #{access_filename}")
      else
        puts "Skipping existing file"
      end
    end

    # Generate the thumb image.
    thumb_filename=File.join([thumb_image_dir, "#{base_filename}_th.jpg"])
    if args.missing == 'false' or !File.exists?(thumb_filename)
      puts "Creating: #{thumb_filename}";
      system("#{cmd_prefix} -resize #{args.thumbs_size} -flatten #{thumb_filename}")
    end

    # Generate the small image.
    small_filename = File.join([small_image_dir, "#{base_filename}_sm.jpg"])
    if args.missing == 'false' or !File.exists?(small_filename)
      puts "Creating: #{small_filename}";
      system("#{cmd_prefix} -resize #{args.small_size} -flatten #{small_filename}")
    end
  end
end


###############################################################################
# TASK: set up new post
###############################################################################

desc "set up new post for blog"
task :new_post do 
  
  # get date 
  post_title = ENV['title']
  tags = ENV['tags']
  categories = ENV['categories']
  cover_image = ENV['cover_image']
  subtitle = ENV['subtitle']
  current_time = Time.new
  date_str = current_time.strftime("%Y-%m-%d")
  
  # Set up
  post_dir = "_posts"
  # template, start on link after <<~END, indentation will be removed
  post_template = <<~END
    ---
    title: #{post_title}
    date: #{current_time}
    tags: [#{tags}]
    subtitle: #{subtitle}
    cover-image: #{cover_image}
    categories: [#{categories}]
    author:
    ---
  END

  # create file name
  if post_title
    post_file_title = post_title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    output_name = post_dir + "/" + date_str + "-" + post_file_title + ".md"
  else
    output_name = post_dir + "/" + date_str + ".md"
  end

  # check dir
  if !Dir.exists?(post_dir) 
    puts "Creating #{post_dir}."
    Dir.mkdir(post_dir) 
  end

  # make sure file doesn't exist
  if File.exists?(output_name)
    puts "The file #{output_name} already exists! New post not created."
  else
    # write file
    File.write(output_name, post_template)
    puts "Wrote new post stub #{output_name}"
  end

end

