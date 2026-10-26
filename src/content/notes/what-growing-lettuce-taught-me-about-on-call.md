---
title: "What growing lettuce taught me about on-call"
description: "Daily rounds, thresholds, and boring systems — hydroponic farming as an on-call training program."
date: 2026-10-12
tag: essay
readTime: 6 min
section: engineering
draft: true
---

Eight years of Android on-call taught me to love boring systems. Ten months of lettuce taught me the same lesson with dirt under my fingernails — well, water under them, since there's no dirt.

The parallels are almost embarrassing. Morning rounds at the greenhouse are a standup with a pH meter: check the vitals, look for anything anomalous, touch nothing unless the numbers say so. The EC log is a crash-rate dashboard. A pump failure at 2am is an incident, and the runbook I wrote for Selada Ops reads exactly like the one I wrote for release day — because panic is not a strategy in either world.

The deepest lesson transferred whole: systems fail at their unmeasured edges. Every outage I've ever ran toward started with a metric nobody graphed. Every dead tray started with a reading nobody took. Now both of my operations run on the same doctrine — measure first, alert early, and intervene as rarely as possible.

Lettuce also taught me what on-call should have: the feedback loop is brutally honest. Software can hide a bad decision for quarters. A tray of seedlings shows you your bad decision in 72 hours, roots included. I recommend it to every engineer who wants to feel what "production" really means.
