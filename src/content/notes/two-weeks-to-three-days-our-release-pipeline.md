---
title: "Two weeks to three days: our release pipeline"
description: "The unglamorous changes that cut our Android release cycle from two weeks to three days."
date: 2026-08-21
tag: ci/cd
readTime: 7 min
section: engineering
draft: true
---

When I joined, a release took two weeks and a small amount of courage. Now it takes three days and nobody books meetings about it. The gap between those two sentences is where most of my education in developer productivity happened.

Nothing exotic did it. The pipeline got faster because we measured it and refused to accept slow steps as natural: Gradle cache hits went from a lottery to a guarantee, the module graph was pruned so builds stopped recompiling the world, and Fastlane lanes took over every manual checkbox on release day.

The deeper fix was cultural. A two-week release cadence makes every release precious, and precious releases get delayed. Once a release became a boring, three-day, checklist-shaped event, the fear drained out of it — and small fixes stopped queueing behind big ones.

The scoreboard, since people ask: crash-free users up, release stress down, and the phrase "we'll ship it next cycle" has quietly gone extinct. Boring, measurable, unglamorous — the release pipeline trifecta.
