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
	whoami

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


### Run command as a different user

#### Windows Server
	runas /user:[machine or domain name]\[admin account name] [command]
#### Red Hat Enterprise Linux
	sudo [command]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sect-Gaining_Privileges-The_sudo_Command.html)
#### Debian
	sudo [command]
[Debian Reference](https://www.debian.org/doc/manuals/debian-reference/)
#### Ubuntu
	sudo [command]
[Ubuntu Help](https://help.ubuntu.com/community/RootSudo)
#### OS X
	sudo [command]
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/sudo.8.html)
#### OpenBSD
	sudo [command]
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/sudo.8)
#### SmartOS
	sudo [command]


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
	sudo -i
[Ubunti wiki](https://help.ubuntu.com/community/RootSudo)
#### OS X
	sudo -i
#### OpenBSD
	sudo -i
#### SmartOS
	sudo -i

## Hardware Inspection


### EFI/BIOS serial numbers

#### Windows Server
	Get-WmiObject -Class Win32_BIOS
[Technet](https://technet.microsoft.com/en-us/library/ee176860.aspx)
#### Red Hat Enterprise Linux
	dmidecode
#### Debian
As above.
#### Ubuntu
As above.
#### OS X
	system_profiler SPHardwareDataType
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/system_profiler.8.html)
#### OpenBSD
	dmidecode
#### SmartOS
	?


### CPU info
#### Windows Server
	Get-WmiObject -Class Win32_Processor
[Technet](http://blogs.technet.com/b/heyscriptingguy/archive/2011/09/26/use-powershell-and-wmi-to-get-processor-information.aspx)
#### Red Hat Enterprise Linux
	less /proc/cpuinfo
#### Debian
#### Ubuntu
As above.
#### OS X
	system_profiler SPHardwareDataType
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/system_profiler.8.html)
#### OpenBSD
	sysctl hw.ncpu
#### SmartOS
	sysinfo
[Manual](https://smartos.org/man/1m/sysinfo)

### Physical memory

#### Windows Server
	Get-WmiObject -Class Win32_PhysicalMemory
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
#### SmartOS
	sysinfo
[Manual](https://smartos.org/man/1m/sysinfo)

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
	ping
[Manual](http://manpages.debian.org/cgi-bin/man.cgi?query=ping)
#### Ubuntu
	ping
[Manual](http://manpages.ubuntu.com/manpages/lucid/man8/ping.8.html)
#### OS X
	ping
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/ping.8.html)
#### OpenBSD
	ping
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/ping.8)
#### SmartOS
	ping
[Manual](https://smartos.org/man/1M/PING)

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
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/ifconfig.8.html)
#### OpenBSD
	ifconfig
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/ifconfig.8?query=ifconfig)
#### SmartOS
[Manual](https://smartos.org/man/1M/ifconfig)

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

### View logs live
#### Windows Server
	Get-Eventlog [log name] -Newest 200
#### Red Hat Enterprise Linux
	journalctl -f -u [service name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/s1-Using_the_Journal.html#s2-Viewing_Log_Files)
#### Debian
	journalctl -f -u [service name]
#### Ubuntu
	tail [syslog log file]
See /etc/syslog.conf for log destinations.
#### OS X
	?
#### OpenBSD
	?
#### SmartOS
	?


## Packaging

### Searching for packages
#### Windows Server
	Find-Package [search term]
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux
	yum search [search term]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Searching_Packages)
#### Debian
	apt-cache search
[Debian FAQ](https://www.debian.org/doc/manuals/debian-faq/ch-pkgtools.en.html)
#### Ubuntu
	apt-cache search
[Community Help Wiki](https://help.ubuntu.com/community/AptGet/Howto#Search_commands)
#### OS X
	brew search [search term]
[Homebrew manual](https://github.com/Homebrew/homebrew/blob/master/Library/Homebrew/manpages/brew.1.md)
#### OpenBSD
List the packages on an [OpenBSD mirror](http://www.openbsd.org/ftp.html)
[OpenBSD FAQ](http://www.openbsd.org/faq/faq15.html#PkgFind)
#### SmartOS
	pkgin av
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)

### Install package file
#### Windows Server
	Install-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux
	yum install [package name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Removing)
#### Debian
	apt-get install [package name]
[Debian wiki](https://wiki.debian.org/DebianPackageManagement)
#### Ubuntu
	apt-get install [package name]
[Ubuntu LTS wiki](https://help.ubuntu.com/lts/serverguide/apt-get.html)
#### OS X
	brew install [package name]
[Homebrew FAQ](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md)
#### OpenBSD
	pkg_add
#### SmartOS
	pkgin in [package name]
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)

### Uninstall package
#### Windows Server
	Uninstall-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux
	yum remove [package name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Removing)
#### Debian
	apt-get remove [package name]
#### Ubuntu
As above.
#### OS X
	brew uninstall [package name]
[Homebrew FAQ](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md)
#### OpenBSD
	pkg_delete [package name]
#### SmartOS
	pkgin rm [package name]
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)



### List all installed packages
#### Windows Server
	Get-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux
	yum list installed
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Listing_Packages)
#### Debian
	dpkg -l
#### Ubuntu
	dpkg -l
[Ubuntu LTS wiki](https://help.ubuntu.com/lts/serverguide/dpkg.html)
#### OS X
	brew list
[Homebrew manual](https://github.com/Homebrew/homebrew/blob/master/Library/Homebrew/manpages/brew.1.md)
#### OpenBSD
	pkg_info
#### SmartOS
	pkgin ls
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)



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
	?
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

## Crypto
### Generate an SSL CSR
#### Windows Server
	certreq
[Technet](https://technet.microsoft.com/en-gb/library/cc736326%28v=ws.10%29.aspx)
#### Red Hat Enterprise Linux
	openssl req
[OpenSSL](https://www.openssl.org/docs/apps/req.html)
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









