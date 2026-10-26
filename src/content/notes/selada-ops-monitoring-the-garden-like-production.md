---
title: "Selada Ops — monitoring the garden like production"
description: "The little app that watches my greenhouse the way I watch production systems — thresholds, alerts, and no heroics."
date: 2026-08-30
tag: system
readTime: 8 min
section: farm
draft: true
---

Selada Ops started as a spreadsheet. Then the spreadsheet missed a pump failure and I lost a tray, so it became an app — the same way every monitoring tool is born from an incident.

The premise is simple: a greenhouse is a production system. It has inputs (nutrients, water, power), signal channels (EC, pH, water temperature, air humidity), and failure modes that get exponentially more expensive the longer they go unnoticed. So the garden gets what any service I operate gets — thresholds, alerts, and a runbook.

- EC and pH checked daily at morning rounds, logged in ten seconds
- Water level and pump runtime tracked automatically; an alert fires if the pump runs short of its 20-hour quota
- Every reading tagged with batch and day number, so trends are queryable — "how did batch #11 handle the hot week?" is one filter away

What surprised me is how much of my day job transferred. Postmortems without blame work as well for dead trays as they do for outages. Dashboards you don't look at are worthless in both worlds. And the goal is the same: a system boring enough that nobody notices it — except at harvest.
