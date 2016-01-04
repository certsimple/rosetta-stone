## Shell basics

### OS version

#### Windows Server
	[Environment]::OSVersion
[TechNet](http://blogs.technet.com/b/heyscriptingguy/archive/2014/04/25/use-powershell-to-find-operating-system-version.aspx)
#### Red Hat Enterprise Linux 7
	cat /etc/redhat-release
[Red Hat Knowledgebase](https://access.redhat.com/solutions/401413)
#### Debian
	cat /etc/debian-version
#### Ubuntu
	lsb_release -a
[Manual](http://manpages.ubuntu.com/manpages/precise/man1/lsb_release.1.html)
#### Arch Linux
[Arch Linux is a rolling release](https://wiki.archlinux.org/index.php/Arch_Linux#Principles)
#### OS X
	sw_vers -productVersion
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/sw_vers.1.html)
#### OpenBSD
	uname -r
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man3/uname.3?query=uname&sec=3)
#### FreeBSD
	freebsd-version
[Manual](https://www.freebsd.org/cgi/man.cgi?query=freebsd-version&sektion=1)
#### SmartOS
	cat /etc/release

### Logged in user account

#### Windows Server
	[Environment]::UserName
[TechNet](https://technet.microsoft.com/en-us/library/ff730963.aspx)
#### Red Hat Enterprise Linux 7
	whoami
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	whoami
#### OpenBSD
	whoami
#### FreeBSD
	whoami
#### SmartOS
	whoami

### Host name

#### Windows Server
	[Environment]::MachineName
#### Red Hat Enterprise Linux 7
	hostname
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
As above.
#### OpenBSD
As above.
#### FreeBSD
As above.
#### SmartOS
As above.


### Run command as root/administrator (or another user)

#### Windows Server
	runas /user:[domain]\[account] [command]
[TechNet](http://technet.microsoft.com/en-us/library/bb490994.aspx)
#### Red Hat Enterprise Linux 7
	sudo [command]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sect-Gaining_Privileges-The_sudo_Command.html)
#### Debian
	sudo [command]
[Debian Reference](https://www.debian.org/doc/manuals/debian-reference/)
#### Ubuntu
	sudo [command]
[Ubuntu Help](https://help.ubuntu.com/community/RootSudo)
#### Arch Linux
	sudo [command]
[ArchWiki](https://wiki.archlinux.org/index.php/Sudo)
#### OS X
	sudo [command]
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/sudo.8.html)
#### OpenBSD
	doas [command]
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/doas.1)
#### FreeBSD
	su [user] -c [command]
[Manual](https://www.freebsd.org/cgi/man.cgi?query=su)
#### SmartOS
	sudo [command]
	pfexec [command]
[Manual](https://smartos.org/man/1m/pfexec)


### Run shell as a different user

#### Windows Server
	Start-Process powershell -Verb runAs
[TechNet](https://technet.microsoft.com/en-us/library/hh849848.aspx)
#### Red Hat Enterprise Linux 7
	sudo -i
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sect-Gaining_Privileges-The_sudo_Command.html)
#### Debian
	sudo -i
[Debian Reference](https://www.debian.org/doc/manuals/debian-reference/)
#### Ubuntu
	sudo -i
[Ubunti wiki](https://help.ubuntu.com/community/RootSudo)
#### Arch Linux
	sudo -i
[ArchWiki](https://wiki.archlinux.org/index.php/Sudo)
#### OS X
	sudo -i
#### OpenBSD
	sudo -i
#### FreeBSD
	su
#### SmartOS
	sudo -i

## Process Management


### Show running processes

#### Windows Server
	Get-Process
[Technet](https://technet.microsoft.com/en-us/library/hh849832.aspx)
#### Red Hat Enterprise Linux 7
	ps
[Manual](http://linux.die.net/man/1/ps)
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	ps
[Manual](https://developer.apple.com/library/prerelease/mac/documentation/Darwin/Reference/ManPages/man1/ps.1.html)
#### OpenBSD
	ps
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/ps.1?query=ps&sec=1)
#### FreeBSD
	ps
[Manual](http://www.freebsd.org/cgi/man.cgi?ps)
#### SmartOS
	ps
[Manual](https://smartos.org/man/1/ps)

### Stop a process

#### Windows Server
	Stop-Process
[Technet](https://technet.microsoft.com/en-us/library/hh849781.aspx)
#### Red Hat Enterprise Linux 7
	kill
[Manual](http://linux.die.net/man/1/kill)
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	kill
[Manual](https://developer.apple.com/library/prerelease/mac/documentation/Darwin/Reference/ManPages/man1/kill.1.html)
#### OpenBSD
	kill
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/kill.1?query=kill&sec=1)
#### FreeBSD
	kill
[Manual](http://www.freebsd.org/cgi/man.cgi?kill)
#### SmartOS
	kill
[Manual](https://smartos.org/man/1/kill)


## Hardware Inspection


### EFI/BIOS serial numbers

#### Windows Server
	Get-WmiObject -Class Win32_BIOS
[Technet](https://technet.microsoft.com/en-us/library/ee176860.aspx)
#### Red Hat Enterprise Linux 7
	dmidecode
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	system_profiler SPHardwareDataType
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/system_profiler.8.html)
#### OpenBSD
	dmidecode
#### FreeBSD
	devinfo -v
[Manual](https://www.freebsd.org/cgi/man.cgi?query=devinfo)
#### SmartOS
	sysinfo
[Manual](https://smartos.org/man/1m/sysinfo)


### CPU info
#### Windows Server
	Get-WmiObject -Class Win32_Processor
[Technet](http://blogs.technet.com/b/heyscriptingguy/archive/2011/09/26/use-powershell-and-wmi-to-get-processor-information.aspx)
#### Red Hat Enterprise Linux 7
	less /proc/cpuinfo
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	system_profiler SPHardwareDataType
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/system_profiler.8.html)
#### OpenBSD
	sysctl hw.model hw.machine hw.ncpu
#### FreeBSD
	sysctl hw.model hw.machine hw.ncpu
#### SmartOS
	sysinfo
[Manual](https://smartos.org/man/1m/sysinfo)

### Physical memory

#### Windows Server
	Get-WmiObject -Class Win32_PhysicalMemory
#### Red Hat Enterprise Linux 7
	less /proc/meminfo
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	system_profiler SPMemoryDataType
#### OpenBSD
	?
#### FreeBSD
	sysctl -a | grep mem
#### SmartOS
	sysinfo
[Manual](https://smartos.org/man/1m/sysinfo)

## Network Connectivity

### Ethernet connectivity
#### Windows Server
	Get-NetAdapter | select name, status
[TechNet](https://technet.microsoft.com/en-us/library/jj130867.aspx)
#### Red Hat Enterprise Linux 7
	ethtool
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	ifconfig [interface]
The `status` field contains connectivity information, `media` contains link negotiation info.
#### OpenBSD
	?
#### FreeBSD
	ifconfig [interface]
#### SmartOS
	dladm show-link | dladm show-vnic
[Manual](https://smartos.org/man/1M/dladm)

### IP connectivity
#### Windows Server
	Test-Connection "[ip address]"
#### Red Hat Enterprise Linux 7
	ping

#### Debian
	ping
[Manual](http://manpages.debian.org/cgi-bin/man.cgi?query=ping)
#### Ubuntu
	ping
[Manual](http://manpages.ubuntu.com/manpages/lucid/man8/ping.8.html)
#### Arch Linux
	ping
#### OS X
	ping
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/ping.8.html)
#### OpenBSD
	ping
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/ping.8)
#### FreeBSD
	ping
#### SmartOS
	ping
[Manual](https://smartos.org/man/1M/PING)

### DNS resolution
#### Windows Server
	Resolve-DnsName "[hostname]"
#### Red Hat Enterprise Linux 7
	host / dig
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
As above.
#### OpenBSD
As above.
#### FreeBSD
As above.
#### SmartOS
As above.

### IP addressing
#### Windows Server
	Get-NetIPAddress
#### Red Hat Enterprise Linux 7
	ip addr
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	ifconfig
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man8/ifconfig.8.html)
#### OpenBSD
	ifconfig
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man8/ifconfig.8?query=ifconfig)
#### FreeBSD
	ifconfig
[Manual](https://www.freebsd.org/cgi/man.cgi?query=ifconfig)
#### SmartOS
	ipadm
[Manual](https://smartos.org/man/1M/ipadm)

### Ethernet connectivity
#### Windows Server
	?
#### Red Hat Enterprise Linux 7
	ethtool
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
	?
#### OpenBSD
	?
#### FreeBSD
	ifconfig
[Manual](https://www.freebsd.org/cgi/man.cgi?query=ifconfig)
#### SmartOS
	dladm
[Manual](https://smartos.org/man/1M/dladm)

### whois
#### Windows Server
Not inbuilt. See link below. [PowerShell whois on GitHub](https://github.com/bone187/PowerShell-Whois).
#### Red Hat Enterprise Linux 7
	whois 'domain [domain name]'
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
As above.
#### OpenBSD
As above.
#### FreeBSD
As above.
#### SmartOS
As above.

## Services


### Installed to
#### Windows Server
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
[Microsoft Support](https://support.microsoft.com/en-us/kb/103000)
#### Red Hat Enterprise Linux 7
	/etc/system
#### Debian
As above.
#### Ubuntu
	/etc/init.d
#### Arch Linux
	/etc/system
#### OS X
	/System/Library/LaunchDaemons/
#### OpenBSD
	No services per se: binaries are launched as daemon processses via `/etc/rc.local`
[OpenBSD FAQ](http://www.openbsd.org/faq/faq10.html)
#### FreeBSD
System

	/etc/rc.d/

Ports/Pkg installed

	/usr/local/etc/rc.d
[rc man page](https://www.freebsd.org/cgi/man.cgi?rc)
#### SmartOS
User installed

	/opt/custom/smf

Pkgsrc installed

	/opt/local/lib/svc/manifest

System

	/lib/svc/manifest

	/var/svc/manifest

### List Services
#### Windows Server
	Get-Service
[Technet](https://technet.microsoft.com/en-us/library/hh849804.aspx)
#### Red Hat Enterprise Linux 7
	systemctl list-unit-files --type=service
#### Debian
As above.
#### Ubuntu
	service --status-all
#### Arch Linux
	systemctl list-unit-files --type=service
#### OS X
	launchctl list
#### OpenBSD
	cat /etc/rc.local
[OpenBSD FAQ](http://www.openbsd.org/faq/faq10.html)
#### FreeBSD
	service -e
	service -l
[Reference](https://www.freebsd.org/doc/en_US.ISO8859-1/articles/linux-users/startup.html)
#### SmartOS
	svcs
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Start Service
#### Windows Server
	Start-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee177001.aspx)
#### Red Hat Enterprise Linux 7
	systemctl start servicename
#### Debian
As above.
#### Ubuntu
	service [servicename] start
#### Arch Linux
	systemctl start servicename
[Arch Wiki](https://wiki.archlinux.org/index.php/Systemd#Using_units)
#### OS X
	launchctl load -w /System/Library/LaunchDaemons/ssh.plist
#### OpenBSD
	Launch directly from the binary
[OpenBSD FAQ](http://www.openbsd.org/faq/faq10.html)
#### FreeBSD
	service [name] start
#### SmartOS
	svcadm enable [service name]
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Stop Service
#### Windows Server
	Stop-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee177005.aspx)
#### Red Hat Enterprise Linux 7
	systemctl stop [servicename]
#### Debian
As above.
#### Ubuntu
	service [servicename] stop
#### Arch Linux
	systemctl stop servicename
[Arch Wiki](https://wiki.archlinux.org/index.php/Systemd#Using_units)
#### OS X
	launchctl unload -w /System/Library/LaunchDaemons/ssh.plist
#### OpenBSD
	pkill [process name]
#### FreeBSD
	service [name] stop
#### SmartOS
	svcadm disable [service name]
[Reference](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

### Restart Service
#### Windows Server
	Restart-Service [servicename]
[Technet](https://technet.microsoft.com/en-us/library/ee176942.aspx)
#### Red Hat Enterprise Linux 7
	systemctl restart [servicename]
#### Debian
As above.
#### Ubuntu
	service [servicename] restart
#### Arch Linux
	systemctl restart servicename
[Arch Wiki](https://wiki.archlinux.org/index.php/Systemd#Using_units)
#### OS X
	?
#### OpenBSD
`kill` process, re-run binary
[OpenBSD FAQ](http://www.openbsd.org/faq/faq10.html)
#### FreeBSD
	service [name] stop
	service [name] start
#### SmartOS
	svcadm restart [service name]
[SmartOS Wiki](https://wiki.smartos.org/display/DOC/SmartOS+Technical+FAQs)

## Logging
### Logs are written to
#### Windows Server
Event Log
#### Red Hat Enterprise Linux 7
journald
#### Debian
journald
#### Ubuntu
syslog
#### Arch Linux
journald
#### OS X
Apple System Log (also called ASL)
#### OpenBSD
syslog
#### FreeBSD
syslogd
#### SmartOS
rsyslog
[Joyent blog](https://www.joyent.com/blog/log-management-on-smart-os-featuring-dtrace-and-node-js)

### Raise a log message from the shell
#### Windows Server
	Write-EventLog
[Technet](https://technet.microsoft.com/en-us/library/hh849847.aspx)
#### Red Hat Enterprise Linux 7
	echo 'hello' | systemd-cat
[Manual](http://www.freedesktop.org/software/systemd/man/systemd-cat.html)
#### Debian
	echo 'hello' | systemd-cat
[Manual](http://www.freedesktop.org/software/systemd/man/systemd-cat.html)
#### Ubuntu
	logger
[Manual](http://manpages.ubuntu.com/manpages/lucid/man1/logger.1.html)
#### Arch Linux
	logger
#### OS X
	logger
[Manual](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/logger.1.html)
#### OpenBSD
	logger
[Manual](http://nixdoc.net/man-pages/openbsd/man1/logger.1.html)
#### FreeBSD
	logger
#### SmartOS
	logger
[Manual](https://www.smartos.org/man/1/logger)

### View logs live
#### Windows Server
	Get-Eventlog [log name] -Newest 200
#### Red Hat Enterprise Linux 7
	journalctl -f -u [service name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/s1-Using_the_Journal.html#s2-Viewing_Log_Files)
#### Debian
	journalctl -f -u [service name]
#### Ubuntu
	tail -f [syslog log file]
See `/etc/syslog.conf` for log destinations, `/var/log/messages` contains most messages.
#### OS X
	tail -f [syslog log file]
See `/etc/syslog.conf` for log destinations, `/var/log/system.log` contains most messages.
#### Arch Linux
	?
#### OpenBSD
	tail -f [syslog log file]
See `/etc/syslog.conf` for log destinations
[Manual](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man5/syslog.conf.5?query=syslog%2econf&sec=5)
#### FreeBSD
	tail -f [syslog log file]
See `/etc/syslog.conf` for log destinations
#### SmartOS
	tail -f [syslog log file]
See `/etc/syslog.conf` for log destinations, `/var/adm/messages` contains most messages.

For SMF:

	tail -f $(svcs -L [service name])

## Packaging

### Searching for packages
#### Windows Server
	Find-Package [search term]
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux 7
	yum search [search term]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Searching_Packages)
#### Debian
	apt-cache search
[Debian FAQ](https://www.debian.org/doc/manuals/debian-faq/ch-pkgtools.en.html)
#### Ubuntu
	apt-cache search
[Community Help Wiki](https://help.ubuntu.com/community/AptGet/Howto#Search_commands)
#### Arch Linux
	pacman -Ss
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	brew search [search term]
[Homebrew manual](https://github.com/Homebrew/homebrew/blob/master/Library/Homebrew/manpages/brew.1.md)
#### OpenBSD
List the packages on an [OpenBSD mirror](http://www.openbsd.org/ftp.html)
[OpenBSD FAQ](http://www.openbsd.org/faq/faq15.html#PkgFind)
#### FreeBSD
	pkg search
[FeeBSD Handbook](https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/pkgng-intro.html)
#### SmartOS
	pkgin av
	pkgin search
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)

### Install package file
#### Windows Server
	Install-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux 7
	yum install [package name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Removing)
#### Debian
	apt-get install [package name]
[Debian wiki](https://wiki.debian.org/DebianPackageManagement)
#### Ubuntu
	apt-get install [package name]
[Ubuntu Server Guide](https://help.ubuntu.com/14.04/serverguide/apt-get.html)
#### Arch Linux
	pacman -S
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	brew install [package name]
[Homebrew FAQ](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md)
#### OpenBSD
	pkg_add
#### FreeBSD
	pkg install
#### SmartOS
	pkgin in [package name]
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)

### Uninstall package
#### Windows Server
	Uninstall-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux 7
	yum remove [package name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Removing)
#### Debian
	apt-get remove [package name]
#### Ubuntu
	apt-get remove [package name]
[Ubuntu Server Guide](https://help.ubuntu.com/14.04/serverguide/apt-get.html)
#### Arch Linux
	pacman -Rc
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	brew uninstall [package name]
[Homebrew FAQ](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md)
#### OpenBSD
	pkg_delete [package name]
#### FreeBSD
	pkg delete [package name]
#### SmartOS
	pkgin rm [package name]
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)



### List all installed packages
#### Windows Server
	Get-Package
[Package Management wiki](https://github.com/OneGet/oneget/wiki/cmdlets)
#### Red Hat Enterprise Linux 7
	yum list installed
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Listing_Packages)
#### Debian
	dpkg -l
[Manual](http://manpages.debian.org/cgi-bin/man.cgi?sektion=1&query=dpkg-query&apropos=0&manpath=sid&locale=en)
#### Ubuntu
	dpkg -l
[Ubuntu Server Guide](https://help.ubuntu.com/14.04/serverguide/dpkg.html)
#### Arch Linux
	pacman -Q
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	brew list
[Homebrew manual](https://github.com/Homebrew/homebrew/blob/master/Library/Homebrew/manpages/brew.1.md)
#### OpenBSD
	pkg_info
#### FreeBSD
	pkg info
#### SmartOS
	pkgin ls
[SmartOS wiki](https://wiki.smartos.org/display/DOC/Working+with+Packages)



### Describe what an installed package is
#### Windows Server
	?
#### Red Hat Enterprise Linux 7
	rpm -qi [package name]
#### Debian
	dpkg --status pkgname
#### Ubuntu
As above.
#### Arch Linux
	pacman -Qi
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	?
#### OpenBSD
	pkg_info
#### FreeBSD
	pkg info [package name]
#### SmartOS
	pkgin pkg-descr [package name]
[pkgin](http://pkgin.net/)





### Determine package responsible for a file
#### Windows Server
	?
#### Red Hat Enterprise Linux 7
	rpm -qf [file]
#### Debian
	dpkg -S
#### Ubuntu
	dpkg -S
[Ubuntu Server Guide](https://help.ubuntu.com/14.04/serverguide/dpkg.html)
#### Arch Linux
	pacman -Qo
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	?
#### OpenBSD
	pkg_info -E [file]
#### FreeBSD
	pkg which [file]
#### SmartOS
	pkg_info -Fe [file]

### List installed package contents
#### Windows Server
	?
#### Red Hat Enterprise Linux 7
	rpm -ql [package name]
[System Administrator's Guide](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/System_Administrators_Guide/sec-Working_with_Packages.html#sec-Listing_Packages)
#### Debian
	dpkg -L [package name]
[Manual](http://manpages.debian.org/cgi-bin/man.cgi?sektion=1&query=dpkg-query)
#### Ubuntu
As above.
#### Arch Linux
	pacman -Ql
[Arch Wiki](https://wiki.archlinux.org/index.php/Pacman)
#### OS X
	?
#### OpenBSD
	?
#### FreeBSD
	pkg list [package]
#### SmartOS
	pkgin pc [package]
	pkgin provides [package name]
[pkgin](http://pkgin.net/)

## Crypto
### Generate an SSL CSR
#### Windows Server
	certreq
[Technet](https://technet.microsoft.com/en-gb/library/cc736326%28v=ws.10%29.aspx)
#### Red Hat Enterprise Linux 7
	openssl req
[OpenSSL](https://www.openssl.org/docs/apps/req.html)
#### Debian
As above.
#### Ubuntu
As above.
#### Arch Linux
As above.
#### OS X
As above.
#### OpenBSD
As above.
#### FreeBSD
As above.
#### SmartOS
As above.
