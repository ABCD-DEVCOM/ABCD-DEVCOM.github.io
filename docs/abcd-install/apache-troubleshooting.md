---
title: Apache Troubleshooting
sidebar_label: Testing Apache (VHost)
sidebar_position: 7
---

# Virtual Host Test (Apache)

**Problem:** After modifying configuration files (`httpd.conf`, `httpd-vhosts.conf`) or adding a new Virtual Host, the Apache webserver often fails to start without providing clear error messages in the GUI.

This guide provides command-line techniques to verify the syntax and configuration.

## Test Scenario

Open a terminal window:
* **Linux:** Terminal / Bash
* **Windows:** CMD (Command Prompt) or PowerShell

### Linux
You can execute these commands regardless of whether the service is currently running.

```bash
# Quick syntax test (Shows "Syntax OK" or specific errors)
/opt/lampp/bin/httpd -t

# Show parsed variables & Virtual Host settings
/opt/lampp/bin/httpd -S

# Alternative using apachectl (Service must be stopped for full output sometimes)
sudo /opt/lampp/bin/apachectl -S

```

### Windows (XAMPP)

Assuming XAMPP is installed in `c:\xampp`.

```cmd
REM Quick syntax test
c:\xampp\apache\bin\httpd -t

REM Show variables & Virtual Host settings
c:\xampp\apache\bin\httpd -S

```

### Windows (Cygwin)

If you are running ABCD via a Cygwin environment:

```bash
/cygdrive/c/abcd/www/cgi-bin/ansi/httpd -t
/cygdrive/c/abcd/www/cgi-bin/ansi/httpd -S

```

---

## Reference: HTTPD Command Line Options

Common options for `httpd` (Apache Hypertext Transfer Protocol Server):

| Option | Description |
| --- | --- |
| **`-t`** | **Run syntax check** for config files. Essential before restarting. |
| **`-S`** | Show parsed **Virtual Host** settings (Synonym for `-t -D DUMP_VHOSTS`). |
| **`-v`** | Show version number. |
| **`-M`** | Show all loaded modules (Static and Shared). |
| **`-l`** | List compiled-in modules. |
| **`-X`** | Debug mode (only one worker, do not detach). |
| **`-k start|restart|stop`** | Signals the server to start, restart, or stop. |
| **`-D name`** | Define a name for use in `<IfDefine name>` directives. |
| **`-f file`** | Specify an alternate `ServerConfigFile`. |

### Windows Specific Options

| Option | Description |
| --- | --- |
| **`-n name`** | Set service name and use its ServerConfigFile. |
| **`-k install`** | Install Apache as a Service (NT/Windows). |
| **`-k uninstall`** | Uninstall the Apache Service. |
