# Avahi Zoo Publisher

This is a very simple example of how to enable the Avahi service in a service
container to publish a service for a device. It uses `systemd` as Debian Avahi
runs as a `systemd` service.

The service itself is defined in `avahi-publisher/avahi/zoo.service`, and
the very simple `avahi-publisher/publisher.js` simply provides the published
service.

You can discover the service by running appropriate tools under your OS:

## MacOS (and theoretically Windows with Bonjour installed)

```
$ dns-sd -B _zoo._tcp

Timestamp     A/R    Flags  if Domain               Service Type         Instance Name
12:00:28.429  Add        2   5 local.               _zoo._tcp.           Zoo Animal Spotter

$ dns-sd -L "Zoo Animal Spotter" _zoo._tcp
Lookup Zoo Animal Spotter._zoo._tcp.local
DATE: ---Fri 01 Mar 2019---
12:01:09.610  ...STARTING...
12:01:09.761  Zoo\032Animal\032Spotter._zoo._tcp.local. can be reached at f386c77.local.:4567 (interface 5)

$ curl -XGET f386c77.local.:4567
A Pigeon has been spotted!
```

## Linux

```
$ avahi-browse -r _zoo._tcp

+   eth0 IPv4 Zoo Animal Spotter                            _zoo._tcp            local
=   eth0 IPv6 Zoo Animal Spotter                            _zoo._tcp            local
   hostname = [f386c77.local]
   address = [fe80::da2e:c366:7a2:be34]
   port = [4567]
   txt = []

$ curl -XGET f386c77.local:4567
A Pigeon has been spotted!
```
