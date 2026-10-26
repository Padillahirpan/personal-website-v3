---
title: "RxJava → Coroutines without stopping the trains"
description: "How we migrated a large Android codebase to coroutines mid-flight — interop first, one module at a time."
date: 2026-09-28
tag: android
readTime: 9 min
section: engineering
draft: true
---

Migrating a live app off RxJava feels like swapping the engine of a car on the highway. Releases couldn't stop — they never stop — so the migration had to ride along with feature work for months.

Our strategy was interop first, strangler second. The `kotlinx-coroutines-rx3` bridge let new coroutine code call into old Rx streams and vice versa, which meant every commit could be 90% old world and 10% new world without shame. We drew a hard line only at module boundaries: a module was declared "migrated" only when zero Rx types crossed its public API.

The rules that kept the trains running:

- Every migration PR shipped alone, behind its own tests, in the normal release train
- Dispatchers were injected, never hard-coded — the Android main thread found out about coroutines last
- Structured concurrency replaced disposable bags, and memory-leak reports actually went down, which we double-checked because it seemed too easy

The last Rx import left the codebase on a Tuesday, noted in the changelog with about as much ceremony as a dependency bump. That's how the best infrastructure work should feel: enormous diff, invisible ride.
