## Logging


### Make changes take effect


#### Red Hat Enterprise Linux


#### OS X

#### Windows Server

### Change Active Link on Bond


#### Red Hat Enterprise Linux
	fenslave -c
#### OS X

#### Windows Server



## User Management

### Add Local User


#### Red Hat Enterprise Linux
	useradd
#### OS X

#### Windows Server
	net user /add

	## Modules

	### List loaded modules


	#### Red Hat Enterprise Linux
		lsmod

	#### OS X
		modinfo

	#### Windows Server

		get-service


	Kernel mode drivers are services where `ServiceType` is `KernelDriver`


	### Load module


	#### Red Hat Enterprise Linux
		modprobe
	#### OS X
		modload
	#### Windows Server





	Unload module


	#### Red Hat Enterprise Linux
		rmmod
	#### OS X
		modunload
	#### Windows Server







	#### Get information about a module
		get-service

	#### Red Hat Enterprise Linux
		modinfo
	#### OS X

	#### Windows Server

	### Tasks

	### Kernel parameters


	#### Red Hat Enterprise Linux
	    sysctl.conf

	#### OS X
	    /etc/system

	#### Windows Server






	### Timezone Updates


	#### Red Hat Enterprise Linux
	    /etc/localtime (copy of /usr/share/

	#### OS X


	#### Windows Server


	## Packaging

	### Install

	#### Red Hat Enterprise Linux
	    rpm -Uvh [package name]

	#### OS X
	    ?

	#### Windows Server
	    msiexec


	### Uninstall


	#### Red Hat Enterprise Linux
	    rpm -e [package name]

	#### OS X


	#### Windows Server


	### List all installed packages


	#### Red Hat Enterprise Linux
	    rpm -qa


	#### OS X


	#### Windows Server






	### Info


	#### Red Hat Enterprise Linux
	    rpm -i [package name]



	#### OS X


	#### Windows Server





	### Determine package responsible for a file

	#### Red Hat Enterprise Linux
	    rpm -qf 'file'

	#### OS X


	#### Windows Server


	### List installed package contents

	#### Red Hat Enterprise Linux
	    rpm -ql [package name]

	#### OS X


	#### Windows Server
	    Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*






	### List uninstalled package contents


	#### Red Hat Enterprise Linux
	    rpm -qlp [package name]

	#### OS X


	#### Windows Server







	### verify package contents


	#### Red Hat Enterprise Linux
		rpm -V [package name]

	#### OS X


	#### Windows Server





	### Extract files from package without installing


	#### Red Hat Enterprise Linux
		rpm -root /tmp -nodeps -noscripts
		rpm2cpio (if installed)

	#### OS X


	#### Windows Server
	    dark.exe file.MSI file.XML /x
		(Requires WiX)
