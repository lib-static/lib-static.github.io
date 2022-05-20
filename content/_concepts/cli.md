---
title: Command Line
contributor: "@evanwill"
updated: 2021-08-04
type: Concepts
description: The command line is a text-based interface for efficiently getting stuff done. 
---

It's often called the shell, terminal, console, cmd, or Bash, but ultimately the **Shell** is just a program on your computer like any other application. 
Its job is to act as a **command shell**, taking input from the user, ordering the computer's software to execute the instructions, and returning the outputs.

Since the 1980's the most common way to interact with a computer is via the **graphical user interface** (GUI), i.e. the windows, icons, and pointers of a desktop environment.
Technically this is a shell.
However, when people talk about *the shell* it usually refers to a **command-line interface** (CLI) made up of only text in a **read-evaluate-print loop** (REPL).

This means:

1. you type something on the input line and press return
2. the shell interprets the command
3. software / OS executes it
4. the shell prints the output
5. repeat!

Note that the shell does not execute commands itself. 
It calls on hundreds of other applications in the OS to get things done. 
It's the most basic way to interface with your computer short of re-wiring it!

Because the command line is text-based, it is good at reproducible batch processes.
You can write reuseable scripts or commands to manipulate groups of files, text, or data in a powerful and efficient manner.

There are actually a lot of shells out there. 
Most OS come with one as a standard application. 
On Windows, CMD or PowerShell are normally available.
These use a syntax and set of applications unique to Windows systems. 

However, the most popular and commonly used is the Unix shell **Bash** ([Bourne Again SHell](https://en.wikipedia.org/wiki/Bash_(Unix_shell))) which is standard on Linux.
Learning Bash will open up a powerful set of tools on your personal machine, in addition to familiarizing you with the standard remote interface used on almost all servers and super computers.
If you want to control a Raspberry Pi or virtual machine in the cloud, you will need to use the Bash Shell.
