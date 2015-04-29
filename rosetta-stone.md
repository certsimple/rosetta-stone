## Shell basics

### Logged in user account

#### Windows Server
	$env:username
#### Red Hat Enterprise Linux
	whoami
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	whoami
#### OpenBSD
	whoami
#### SmartOS
	?

### Host name

#### Windows Server
	$env:COMPUTERNAME
#### Red Hat Enterprise Linux
	hostname
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
As above.
#### OpenBSD
As above.
#### SmartOS
As above.


### Run as a different user

#### Windows Server
	runas /user:[machine or domain name]\[admin account name] [command]
#### Red Hat Enterprise Linux
	sudo [command]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sect-Gaining_Privileges-The_sudo_Command.html)
#### Debian
	sudo -i
[Debian Reference](https://www.debian.org/doc/manuals/debian-reference/)
#### Ubuntu
	sudo -i
[Ubuntu Help](https://help.ubuntu.com/community/RootSudo)
#### OS X
	sudo [command]
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/sudo.8.html)
#### OpenBSD
	sudo [command]
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/sudo.8)
#### SmartOS
	?


### Run shell as a different user

#### Windows Server
	Start-Process powershell -Verb runAs
#### Red Hat Enterprise Linux
	sudo -i
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sect-Gaining_Privileges-The_sudo_Command.html)
#### Debian
	sudo -i
[Debian Reference](https://www.debian.org/doc/manuals/debian-reference/)
#### Ubuntu
As above.
#### OS X
	sudo -i
#### OpenBSD
	sudo -i
#### SmartOS
	?

## Hardware Inspection


### EFI/BIOS serial numbers

#### Windows Server
	Get-WmiObject -Class Win32_BIOS
#### Red Hat Enterprise Linux
	dmidecode
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	system_profiler SPHardwareDataType
#### OpenBSD
	dmidecode
#### SmartOS
	?


### CPU info
#### Windows Server
	Get-WmiObject -Class Win32_Processor
#### Red Hat Enterprise Linux
	less /proc/cpuinfo
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	system_profiler SPHardwareDataType
#### OpenBSD
	sysctl hw.ncpu
#### SmartOS
	?

### Physical memory

#### Windows Server
	Get-WmiObject -Class  Win32_PhysicalMemory
#### Red Hat Enterprise Linux
	less /proc/meminfo
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	system_profiler SPMemoryDataType
#### OpenBSD
	?

## Network Connectivity

### Ethernet connectivity

#### Windows Server
	get-wmiobject win32_networkadapter | select netconnectionId, name, interfaceIndex, netConnectionStatus

The select is required because netConnectionStatus isn't in the default properties.
#### Red Hat Enterprise Linux
	ethtool
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?

### IP connectivity
#### Windows Server
	Test-Connection "[ip address]"
#### Red Hat Enterprise Linux
	ping
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	ping
#### OpenBSD
	?
#### SmartOS
	?

### DNS resolution
#### Windows Server
	Resolve-DnsName "[hostname]"
#### Red Hat Enterprise Linux
	host / dig
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	host / dig
#### OpenBSD
	host / dig
#### SmartOS
	?

### IP addressing
#### Windows Server
	Get-NetIPAddress
#### Red Hat Enterprise Linux
	ip addr
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	ifconfig
#### OpenBSD
	ifconfig
#### SmartOS
	?

### Ethernet connectivity
#### Windows Server
	?
#### Red Hat Enterprise Linux
	ethtool
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?

### whois
#### Windows Server
	$web = New-WebServiceProxy 'http://www.webservicex.net/whois.asmx?WSDL'
	$web.GetWhoIs('[domain name]')
#### Red Hat Enterprise Linux
	whois 'domain [domain name]'
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	whois 'domain [domain name]'
#### OpenBSD
	?
#### SmartOS
	?

## Services


### Installed to
#### Windows Server
	?
#### Red Hat Enterprise Linux
	/etc/system
#### Debian
As above.
#### Ubuntu
	/etc/init.d
#### OS X
	/System/Library/LaunchDaemons/
#### OpenBSD
	?
#### SmartOS
	?

### List Services
#### Windows Server
	Get-Service
#### Red Hat Enterprise Linux
	systemctl list-unit-files --type=service
#### Debian
As above.
#### Ubuntu
	ls /etc/init.d
#### OS X
	launchctl list
#### OpenBSD
	?
#### SmartOS
	svcs
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Start Service
#### Windows Server
	Start-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee177001.aspx)
#### Red Hat Enterprise Linux
	systemctl start servicename
#### Debian
As above.
#### Ubuntu
	/etc/init.d/[service file] start
#### OS X
	launchctl load -w /System/Library/LaunchDaemons/ssh.plist
#### OpenBSD
	?
#### SmartOS
	svcadm enable [service name]
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Stop Service
#### Windows Server
	Stop-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee177005.aspx)
#### Red Hat Enterprise Linux
	systemctl stop [servicename]
#### Debian
As above.
#### Ubuntu
	/etc/init.d/[service file] stop
#### OS X
	launchctl unload -w /System/Library/LaunchDaemons/ssh.plist
#### OpenBSD
	pkill [process name]
#### SmartOS
	svcadm disable
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Restart Service
#### Windows Server
	Restart-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee176942.aspx)
#### Red Hat Enterprise Linux
	systemctl restart [servicename]
#### Debian
As above.
#### Ubuntu
	/etc/init.d/[service file] restart
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	svcadm restart
[SmartOS Wiki](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

## Logging
### Logs are written to
#### Windows Server
Event Log
#### Red Hat Enterprise Linux
journald
#### Debian
journald
#### Ubuntu
syslog
#### OS X
Apple System Log (also called ASL)
#### OpenBSD
	?
#### SmartOS
	?

### Raise a log message from the shell
#### Windows Server
	Write-EventLog
[Technet](https://technet.microsoft.com/en-us/library/hh849847.aspx)
#### Red Hat Enterprise Linux
	echo 'hello' | systemd-cat
[Manual](http://www.freedesktop.org/software/systemd/man/systemd-cat.html)
#### Debian
	echo 'hello' | systemd-cat
[Manual](http://www.freedesktop.org/software/systemd/man/systemd-cat.html)
#### Ubuntu
	logger
[Manual](http://manpages.ubuntu.com/manpages/lucid/man1/logger.1.html)
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?

### Watch logs interactively
#### Windows Server
	?
#### Red Hat Enterprise Linux
	?
#### Debian
	?
#### Ubuntu
	?
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?


## Packaging
### Install package file
#### Windows Server
	msiexec /package [msi file] /quiet
[Reference](https://msdn.microsoft.com/en-us/library/aa372024%28v=vs.85%29.aspx)
#### Red Hat Enterprise Linux
	yum install [package name]
or if the file is already downloaded:

	rpm -Uvh [rpm file]
#### Debian
	dpkg -i [deb file]
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	pkg_add
#### SmartOS
	pkg_add

### Uninstall package
#### Windows Server
	$app = Get-WmiObject -Class Win32_Product | Where-Object {
		$_.Name -match "Software Name"
	}
	$app.Uninstall()
#### Red Hat Enterprise Linux
	yum remove [package name]
or

	rpm -e [package name]
#### Debian
	apt-get remove [package name]
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?



### List all installed packages
#### Windows Server
	Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | select DisplayName, Publisher, InstallDate
[TechNet](http://blogs.technet.com/b/heyscriptingguy/archive/2013/11/15/use-powershell-to-find-installed-software.aspx)
#### Red Hat Enterprise Linux
	rpm -qa
#### Debian
	dpkg -l
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	pkg_info
#### SmartOS
	?




### Describe what an installed package is
#### Windows Server
	?
#### Red Hat Enterprise Linux
	rpm -qi [package name]
#### Debian
	dpkg --status pkgname
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	pkg_info
#### SmartOS
	?






### Determine package responsible for a file
#### Windows Server
	?
#### Red Hat Enterprise Linux
	rpm -qf [file]
#### Debian
	dpkg -S
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	pkg_info -E [file]
#### SmartOS
	?

### List installed package contents
#### Windows Server
	Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*
#### Red Hat Enterprise Linux
	rpm -ql [package name]
#### Debian
	?
#### Ubuntu
As above.
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?












