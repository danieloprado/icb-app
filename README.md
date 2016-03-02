Configuring the project with vagrant:
=====================================

Initializing the VM:
-------------------

``` bash
cd vagrant
vagrant up
```

Await until the server is conofigured, it may take a while

Access the VM with SSH:
---------------------

``` bash
cd vagrant
vagrant ssh
```

Run the application on the browser
----------------------------

Access with ssh and..

``` bash
cd /project
ionic serve
```

Run the app in an android device
----------------

``` bash
ionic run android
```

See log on device:
``` bash
adb logcat | grep -i "console"
```
