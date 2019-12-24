# Ansible Notes: The Plan (WIP)
This project aims to organize the various systems I'd like to run on my current and future desktop set-up.

The project willl serve as a way for me to create immutable base configurations for my storage server, my daily-driver Fedora installation, and my Windows 10 VM for gaming 

All of these will be running from a minimal base-os installation which will likely Fedora Silverblue due to its immutable nature. This will allow for constant revision in the configuration of the entire setup, while having a stable unchanging base where all the changes happen. It also makes the setup portable so that future builds can inherit the configuration and build upon it as needs change.

Although not a strict rule, this project aims to only utlize FOSS for primary operations with the major exception being the Windows 10 VM.

List of software is tentative (and incomplete):

| Software / Service | Function                    | License        |
| ------------------ | --------------------------- | -------------- |
| Ansible            | Configuration Management    | GPLv3          |
| Docker             | Container Runtime           | Apache 2.0     |
| Vagrant            | VM Configuration Management | MIT            |
| KVM                | Bare-metal Hypervisor       | GPLv1-3 / LGPL |


### Workstation:

`workstation` will be home-base for normal day-to-day operations for both work and personal use.

This system will run as a Fedora Workstation VM with all the my configuration being pulled from a git repo, and deployed using an ansible playbook targetted at the `workstation` host.

_This section will be expanded upon later as more features of it are decided._

### Kittystor

`kittystor` will be a group of containers running under the base system that contain snapRAID and mergerFS as well potetionally additonal contianers for contianer mangement, and tools like Ansible Tower, etc.



### TODO

* Back up `Lapkitty` to a raw iamge file and install `Windows 10 Professional` and `Fedora 31` 
* Create the `kittystor` _Ansible Playbook_ for creating the snapRAID and MergerFS configuration.
* Create the `base` _Ansible Playbook_ for preparing and bootstraping the bare-metal server configuration
* Back up up and reinstall Windows 10 as both KVM guest using _Vagrant_ as well as possible dual-boot option.
* Create the `workstation` _Ansible Playbook_ and start messing around with various window managers, and setting up home-base.
* Create script for passing off GPU to whichever VM guest is running with preference for Windows 10 if both are running.
