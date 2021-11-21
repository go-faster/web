---
id: sponsor
title: Sponsor
position: 4
---

The *go faster* project is fully open source, non-commercial and vendor-neutral, so solely relies on personal funds or sponsors
to maintain infrastructure.

## Servers

While most of CI/CD is free for open source, *go faster* maintains high standards on testing and security that require
more advanced pipelines or runners.

Currently, we are hosting Linux/**ARM64** GitHub Actions Runner to ensure that critical projects are tested on this architecture.

While this is already more than the majority of projects are doing, we can do even better.

### Apple M1

Multiple hosters like [Scaleway](https://www.scaleway.com/en/hello-m1/), [Hetzner](https://www.hetzner.com/dedicated-rootserver/mac-mini-m1) or [Selectel](https://selectel.ru/en/services/dedicated/config/?uuid=938336c2-7306-4412-b8dd-034a0e3d0413)
offer dedicated Mac Mini on M1, and *go faster* can host runner on this architecture too.

### Fuzzing

We can run fuzzing on machines, this scales well with multiple CPU-s.

Also, this is a pre-requisite for open source continuous fuzzing system for Go.

### Benchmarks

We can run benchmarks (automated and manual) for our projects (HTTP server, JSON marshaling, ClickHouse client).
Ideally this should be done on performant dedicated servers, probably even multiple servers with good and fast local networking
connectivity (10G or more).

This is a pre-requisite for open source continuous benchmarking system for Go.

## Becoming sponsor

Contact us via Slack or Telegram. Can be direct donations or even access to infrastructure.
We can use anything what we can access by SSH, but provider dashboard access (like dedicated account) is preferable.

## Sponsors
Currently, we have no sponsors.
