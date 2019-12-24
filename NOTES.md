# Ansible Notes: Notes Edition
This is just a place for me to keep some notes as I'm learning some technologies. Here: 
**Ansible**
## Playbooks
* Playbooks at their heart are just [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html#yaml-syntax) files that are run by *Ansible* that basically represent kinda sorta recipe files for _configuration management_  and application deployment (such as Docker containers).
    * Each _`play`_ is assigned target hosts on which to execute the play.
    * Each target _`host(s)`_ can execute several _`tasks`_ in a single play.
    * Each _`playbook`_ can consist of several plays: that is, one can have different plays targetting different sets of hosts executing various tasks. 
* Plays in a playbook are executed in top to bottom order and simiarly tasks are also run top to bottom order.

* "**Modules should be idempotent**", that is, running a module multiple times in a sequence should have the same effect as running it just once. One way to achieve idempotency is to have a module check whether its desired final state has already been achieved, and if that state has been achieved, to exit without performing any actions. If all the modules a playbook uses are idempotent, then the playbook itself is likely to be idempotent, so re-running the playbook should be safe." 

**Careful of world-writable current directory** : Ansible will not automatically load a config file from the current working directory if the directory is world-writable. Extra care is needed for Vagrantfiles, see _Useful Links_ below.


### Useful links 

* `raw` module documentation [docs.ansible.com](https://docs.ansible.com/ansible/latest/modules/raw_module.html#raw-module)

* Vagrant Synced Folders Permissions [jeremykendall.net](https://jeremykendall.net/2013/08/09/vagrant-synced-folders-permissions)
  
* List of facts and special varables [stackoverflow.com](https://stackoverflow.com/questions/18839509/where-can-i-get-a-list-of-ansible-pre-defined-variables)

* [Podman is better](https://dwalsh.fedorapeople.org/ReplacingDockerWithPodman.pdf)

* https://www.redhat.com/en/blog/containers-are-linux

* Jinja2 syntax Overview [oznetnerd.com](http://www.oznetnerd.com/jinja2-overview/)