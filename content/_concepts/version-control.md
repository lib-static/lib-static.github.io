---
title: Version Control
contributor: "@evanwill"
updated: 2021-08-04
type: concept
description: Version control systems enable better collaboration, management, exploration, and understanding of static projects (and almost everyone uses Git). 
---

Every project uses version control (or "source control"), whether it is a formal tool or a set of conventions loosely imagined in your head. 

For example, do filenames like "draft1.docx", "draft1_edits.docx", "draft1_edits_final.docx", "draft1_edits_final_good-one.docx" look familiar?  This is a form of version control embedding revision information in the filenames. Obviously, this gets confusing and overwhelming quickly, even when working only with yourself.

Word processor applications often have a "track changes" feature, providing a form of version control for a single document. In MS Word, track changes records an edit along with a user's name. However, once the user "accepts" the change, the history disappears, erasing the record of the editing process. 

On a static project, you will likely have large folders of files that need to be managed and tracked together as a group. Because of the complexity and interconnected nature of the source code, we would like to be able to review any edits to the project files to understand:

- changes made on a detailed line by line basis
- how the project has changed over time, who changed it and why
- issues introduced during individual edits to help debug
- file integrity to avoid lost or corrupted data

Version control systems are applications that can help us do that, enabling better collaboration, understanding of development, and transparency for your project.

### Git Version Control

Large software projects traditionally used centralized version control systems, such as [SVN](https://subversion.apache.org/). In these systems the source code and full history is stored in a central server, providing top down control and security over enterprise projects.

However, most open source projects now use [distributed version control systems](https://en.wikipedia.org/wiki/Distributed_version_control) in which each copy of a project represents the full source code *and* full history in a self-contained repository. This radical concept removes the need for centralized infrastructure, improving local performance and transparency, while opening up new means of collaboration.

While there are alternatives, the vast majority of open source projects have adopted [Git](https://git-scm.com/) for version control. Git was originally developed for coordinating huge software development projects (specifically the [Linux kernel](https://www.kernel.org/)). However, it is fast and flexible enough to be used on any scale project, from your personal notes to your library's websites.

**Learning Git is not easy** and often presents a barrier when getting started with static web projects. However, the pay off will be worthwhile, opening up opportunities to engage in open source ecosystems and to efficiently manage your own work.

### Commit, Branch, Merge

Rather than storing a series of copies of a file with different filenames, Git captures a snapshot of your project each time you `commit`. Each `commit` records the creator, email, and changes made, providing transparency and credit for your project, as well as, checksums to ensure no information can be lost or corrupted without detection. Git permanently stores this series of snapshots as your project's history.

Try to think of your changes as separate from the document itself. The current file that you see in your folder is made up of a specific set of those changes, while the complete history of your project is safely stored in a hidden `.git` directory.

When committing to a repository Git only adds data, it never deletes information. This makes almost everything undoable!

Git allows you to efficiently create "branches", an exact copy of the code tracked separately, so that you can test or develop new features without overwriting or interfering with your main copy. This is meant to give you the courage to make changes and experiment with your project code without fear!

If your branch is successful, Git also provides tools to merge the new changes back into the main branch. This enables people to work in parallel with the ability to sync files and resolve conflicts in the code.

### Repository Hosts

To make the most of Git version control, most people use a repository hosting service such as [GitHub](https://github.com/), [Bitbucket](https://bitbucket.org/), or [Gitlab](https://about.gitlab.com/gitlab-com/). These platforms combine version control with online project management features in a web interface to facilitate collaboration. With a shared "remote" repository, collaborators from anywhere can stay in sync and work in parallel. 

### Resources

- [Git for Humans (video)](https://youtu.be/eWxxfttcMts)
- The [Git Book](https://git-scm.com/book/en/v2)
- GitHub [Guides](https://guides.github.com/) and interactive [Learning Lab](https://lab.github.com/)
- Atlassian Bitbucket [Learn Git Tutorials](https://www.atlassian.com/git/tutorials)
