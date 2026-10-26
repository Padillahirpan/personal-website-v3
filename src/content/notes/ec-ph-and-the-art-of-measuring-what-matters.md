---
title: "EC, pH, and the art of measuring what matters"
description: "Two numbers run my greenhouse; two or three run a good app. On picking metrics you'll actually act on."
date: 2026-10-02
tag: farm
warm: true
readTime: 5 min
section: engineering
draft: true
---

The greenhouse runs on two numbers: EC and pH. The apps I ship run on two or three: crash-free users, release health, maybe startup time. That symmetry is not a coincidence — it's the entire discipline of operations.

The magic of EC and pH is that each one is actionable. EC too low? Add nutrients. Too high? Top up with water. There's no dashboard theater because every reading maps to a next step. Most software dashboards fail this test — plenty of charts, no decisions attached.

Calibration is the other half. My EC meter drifts, so it gets a two-point calibration on a schedule, not when I remember. Instruments in software drift too: crash aggregators under-count, performance percentiles lie under low traffic. If a number guides decisions, its own health needs checking.

My rule after ten months of farming and eight years of shipping: a metric earns its place on the wall only if, on the day it changes, someone knows what to do next. Everything else is decoration.
