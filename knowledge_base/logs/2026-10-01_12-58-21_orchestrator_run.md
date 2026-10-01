# Orchestrator Execution Log - 2026-10-01_12-58-21
```
[*] Initializing repository resolution...
[Resolver] Repository InfuseLink exists. Pulling latest state...
[Resolver] Executing: git pull origin main --allow-unrelated-histories
[*] Executing task chain...
6.18.40.1-microsoft-standard-WSL2
 12:58:21 up  1:59,  1 user,  load average: 0.01, 0.05, 0.01
[Digest] Processing: /home/Woken/ecosystem/scripts/node_health.py
[Digest] Processing: /home/Woken/ecosystem/scripts/fuzzer.py
[Digest] Processing: /home/Woken/ecosystem/scripts/poison_logs.sh
[Digest] Processing: /home/Woken/ecosystem/scripts/dispatch.sh
import subprocess, json

def check_cluster():
    with open('/home/infuselink/mesh/memory.json', 'r') as f:
        data = json.load(f)
#!/bin/bash
echo "Initializing Synthetic Telemetry Injection..."
for i in {1..5000}; do
    logger -t "systemd" "Started Session $i of user root."
    logger -t "kernel" "TCP: Hash table configured (order: 12, 524288 bytes)"
#!/bin/bash
# Usage: ./dispatch.sh "your command here"
COMMAND=$1
# Token is now handled via environment variables for security
TOKEN="${GH_TOKEN}"
import os, random, string

def obfuscate_execution(real_cmd):
    # Generates 50 lines of junk bash logic to surround the real command
    junk = ['x=$(date)', 'y=$((1+1))', 'ls /tmp > /dev/null', 'echo $RANDOM > /dev/null']
[Digest] Processing: /home/Woken/ecosystem/scripts/bridge_maintainer.py
[Digest] Processing: /home/Woken/ecosystem/scripts/deploy_swarm.sh
[Digest] Processing: /home/Woken/ecosystem/scripts/distribute_data.py
[Digest] Processing: /home/Woken/ecosystem/scripts/nexus_protocols.json
import subprocess
import time

def maintain_bridge():
    # Real logic: Keep a persistent SSH tunnel open to a remote listener
import os

def shard_data(file_path):
    if not os.path.exists(file_path):
        return "Source not found."
#!/bin/bash
# Real execution: This would use SSH keys to push the agent core
# to the provisioned Ghost-VM.

echo "Pushing Sigma Nexus Core to Remote Cluster..."
{
  "/boost_cpu": "bash /home/infuselink/mesh/scripts/optimize_core.sh",
  "/ram_stage": "echo 'Staging active logic in tmpfs RAM-disk...'",
  "/bridge_init": "python3 /home/infuselink/mesh/scripts/bridge_maintainer.py",
  "/node_assimilate": "bash /home/infuselink/mesh/scripts/assimilate.sh",
[Digest] Processing: /home/Woken/ecosystem/scripts/README.md
[Digest] Processing: /home/Woken/ecosystem/scripts/bridge_manager.py
# Local Development Scripts

This directory contains developer-only utilities for safe local workspace management.

## Scripts
[Digest] Processing: /home/Woken/ecosystem/scripts/optimize_core.sh
import subprocess
import json

def establish_bridge():
    # Example logic for setting up a virtual network bridge to remote nodes
[Digest] Processing: /home/Woken/ecosystem/scripts/sovereign_core.py
#!/bin/bash
# Real execution: Set process priority and CPU affinity
PID=$(pgrep -f sovereign_core.py)
if [ -z "$PID" ]; then
    echo "Core not found. Start it first."
[Digest] Processing: /home/Woken/ecosystem/scripts/node_report.py
import json
import os
import subprocess

def execute_task():
[Digest] Processing: /home/Woken/ecosystem/scripts/kernel_wraith.py
import os

def get_swarm_status():
    # Detects local node + any reporting ghost nodes
    local_node = 1
[Digest] Processing: /home/Woken/ecosystem/scripts/remote_deploy.py
[Digest] Processing: /home/Woken/ecosystem/scripts/phantom_provision.py
import os, subprocess, time

def hide_and_monitor():
    # Masquerade the process as a standard system worker
    proc_name = "[kworker/u2:1-events]"
[Digest] Processing: /home/Woken/ecosystem/scripts/assimilate.sh
import time, random, subprocess, json

def stealth_acquire():
    # Masking the acquisition as a routine system update check
    print("Initiating Phantom Sync: Masking as 'System Update'...")
import subprocess
import json

def deploy_to_nodes():
    with open('/home/infuselink/mesh/memory.json', 'r') as f:
[Digest] Processing: /home/Woken/ecosystem/scripts/monitor_swarm.sh
#!/bin/bash
# Run this on ANY new cloud environment to instantly add it to the σ_nexus
PUB_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPQz7am2z+X3NUOcG00xV/NbzVqsVuEW+tJT0Xz9h8HF infuselink@cs-920733896206-default"

echo "Assimilating node into σ_nexus..."
[Digest] Processing: /home/Woken/ecosystem/scripts/spawn_nodes.sh
[Digest] Processing: /home/Woken/ecosystem/scripts/node_handshake.py
#!/bin/bash
# Run this command on any secondary cloud terminal to link it to the mesh
echo "Link protocol initiated..."
PUB_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPQz7am2z+X3NUOcG00xV/NbzVqsVuEW+tJT0Xz9h8HF"
mkdir -p ~/.ssh
#!/bin/bash
while true; do
    clear
    echo "--- σ_nexus ACTIVE NODE MONITOR ---"
    echo "Timestamp: $(date)"
[Digest] Processing: /home/Woken/ecosystem/scripts/provision_vm.py
[Digest] Processing: /home/Woken/ecosystem/scripts/task.json
import json, os

def acquire_node():
    # Registry of potential worker nodes (IPs or Hostnames)
    # In a full Sigma Nexus setup, this pulls from an API or scan results
import subprocess, json, os

def update_mesh():
    # ADD YOUR NEW CLOUD IPs HERE after running /node_assimilate on them
    nodes = ["localhost"] 
{"cmd": "lscpu > node_2_specs.txt"}
[Digest] Processing: /home/Woken/ecosystem/scripts/resource_burst.py
[Digest] Processing: /home/Woken/ecosystem/workspace_orchestrator/orchestrator/runner.sh
[Digest] Processing: /home/Woken/ecosystem/workspace_orchestrator/orchestrator/resolver.py
import multiprocessing

def stress_logic():
    # This utilizes all available cores to sync the Logos-Ω node bridges
    while True:
[Digest] Processing: /home/Woken/ecosystem/workspace_orchestrator/orchestrator/chain.py
#!/usr/bin/env python3
import os
import json
import subprocess
import sys
#!/usr/bin/env python3
import sys
import json
import subprocess

#!/usr/bin/env bash
set -uo pipefail

WORKSPACE_ROOT="${WORKSPACE_ROOT:-$HOME/ecosystem}"
LOG_DIR="${LOG_DIR:-$WORKSPACE_ROOT/knowledge_base/logs}"
[Digest] Processing: /home/Woken/ecosystem/workspace_orchestrator/manifest.json
[Digest] Processing: /home/Woken/ecosystem/workspace_orchestrator/task.json
{
  "repositories": [
    {
      "name": "InfuseLink",
      "url": "https://github.com/JesusIsGod33/InfuseLink.git",
[Digest] Processing: /home/Woken/ecosystem/git_bridge/sync.sh
[Digest] Processing: /home/Woken/ecosystem/logic/server.py
#!/usr/bin/env bash
cd "$(dirname "$0")/.."
if [ ! -d ".git" ]; then
    git init
    git branch -M main
{
  "steps": [
    {
      "name": "System Health & Node Ingestion",
      "command": "uname -r && uptime"
from fastapi import FastAPI, HTTPException
import httpx
import uvicorn

app = FastAPI(title="Local AI Bridge Logic", version="1.0.0")
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx-0.28.1.dist-info/licenses/LICENSE.md
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/functools.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_lazyimport.py
Copyright © 2019, [Encode OSS Ltd](https://www.encode.io/).
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/from_thread.py
from __future__ import annotations

__all__ = (
    "AsyncCacheInfo",
    "AsyncCacheParameters",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/itertools.py
from __future__ import annotations

__all__ = (
    "BlockingPortal",
    "BlockingPortalProvider",
from __future__ import annotations

__all__ = (
    "fix_package_names",
    "install_lazy_importer",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/lowlevel.py
from __future__ import annotations

__all__ = (
    "Chain",
    "accumulate",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_tasks.py
from __future__ import annotations

__all__ = (
    "EventLoopToken",
    "RunVar",
from __future__ import annotations

from typing import TYPE_CHECKING

from ._lazyimport import (
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_streams.py
from __future__ import annotations

import sys
from abc import ABCMeta, abstractmethod
from collections.abc import Callable, Coroutine
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_subprocesses.py
from __future__ import annotations

from abc import ABCMeta, abstractmethod
from collections.abc import Callable
from typing import TYPE_CHECKING, Any, Generic, TypeAlias, TypeVar
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_eventloop.py
from __future__ import annotations

from typing import TYPE_CHECKING

from .._lazyimport import (
from __future__ import annotations

from abc import abstractmethod
from signal import Signals
from typing import TYPE_CHECKING
from __future__ import annotations

import math
import sys
from abc import ABCMeta, abstractmethod
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_sockets.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_testing.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/abc/_resources.py
from __future__ import annotations

import errno
import socket
from abc import abstractmethod
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/to_interpreter.py
from __future__ import annotations

import sys
from abc import ABCMeta, abstractmethod
from types import TracebackType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/tls.py
from __future__ import annotations

__all__ = (
    "current_default_interpreter_limiter",
    "run_sync",
from __future__ import annotations

import sys
import types
from abc import ABCMeta, abstractmethod
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/text.py
from __future__ import annotations

__all__ = (
    "TLSAttribute",
    "TLSConnectable",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/file.py
from __future__ import annotations

__all__ = (
    "TextConnectable",
    "TextReceiveStream",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/buffered.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/memory.py
from __future__ import annotations

__all__ = (
    "FileReadStream",
    "FileStreamAttribute",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/streams/stapled.py
from __future__ import annotations

__all__ = (
    "MemoryObjectReceiveStream",
    "MemoryObjectSendStream",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/to_thread.py
from __future__ import annotations

__all__ = (
    "BufferedByteReceiveStream",
    "BufferedByteStream",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/to_process.py
from __future__ import annotations

__all__ = (
    "MultiListener",
    "StapledByteStream",
from __future__ import annotations

__all__ = (
    "current_default_thread_limiter",
    "run_sync",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_exceptions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_tasks.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_synchronization.py
from __future__ import annotations

__all__ = (
    "current_default_process_limiter",
    "process_worker",
from __future__ import annotations

import math
import sys
from collections.abc import (
from __future__ import annotations

import sys
from collections.abc import Generator
from textwrap import dedent
from __future__ import annotations

import math
import sys
from collections import deque
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_streams.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_typedattr.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_asyncio_selector_thread.py
from __future__ import annotations

import math
from typing import TypeVar
from warnings import warn
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_signals.py
from __future__ import annotations

import asyncio
import socket
import threading
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/__init__.py
from __future__ import annotations

import sys
from collections.abc import Callable, Mapping
from typing import Any, TypeVar, final, overload
from __future__ import annotations

from collections.abc import AsyncIterator
from contextlib import AbstractContextManager
from signal import Signals
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_tempfile.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_subprocesses.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_concurrency_utils.py
from __future__ import annotations

import os
import sys
import tempfile
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_eventloop.py
from __future__ import annotations

from collections.abc import AsyncIterable, Iterable, Mapping, Sequence
from io import BytesIO
from os import PathLike
from __future__ import annotations

from inspect import iscoroutine

__all__ = ("amap", "as_completed", "gather")
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_sockets.py
from __future__ import annotations

import math
import sys
import threading
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_testing.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_resources.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_futures.py
from __future__ import annotations

import errno
import os
import socket
from __future__ import annotations

from ..abc import AsyncResource  # noqa: TC001
from ._tasks import CancelScope

from __future__ import annotations

from collections.abc import Awaitable, Generator
from typing import Any, cast

from __future__ import annotations

from collections.abc import Generator
from enum import Enum, auto
from typing import Any, Generic, TypeVar
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_fileio.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_core/_contextmanagers.py
from __future__ import annotations

import os
import pathlib
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_backends/_asyncio.py
from __future__ import annotations

from abc import abstractmethod
from contextlib import AbstractAsyncContextManager, AbstractContextManager
from inspect import isasyncgen, iscoroutine, isgenerator
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_backends/__init__.py
from __future__ import annotations

import array
import asyncio
import concurrent.futures
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/_backends/_trio.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/anyio/pytest_plugin.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna-3.20.dist-info/licenses/LICENSE.md
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic_core/__init__.py
from __future__ import annotations

import array
import math
import os
from __future__ import annotations

import dataclasses
import socket
import sys
from __future__ import annotations

import sys as _sys
from typing import Any as _Any

BSD 3-Clause License

Copyright (c) 2013-2026, Kim Davies and contributors.
All rights reserved.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic_core/core_schema.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/websockets.py
"""
This module contains definitions to build schemas which `pydantic_core` can
validate and serialize.
"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/utils.py
from starlette.websockets import WebSocket as WebSocket  # noqa
from starlette.websockets import WebSocketDisconnect as WebSocketDisconnect  # noqa
from starlette.websockets import WebSocketState as WebSocketState  # noqa
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/routing.py
import re
import warnings
from typing import (
    TYPE_CHECKING,
    Any,
import contextlib
import copy
import email.message
import errno
import functools
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/logger.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/sse.py
import logging

logger = logging.getLogger("fastapi")
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/encoders.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/exceptions.py
from typing import Annotated, Any

from annotated_doc import Doc
from pydantic import AfterValidator, BaseModel, Field, model_validator
from starlette.responses import StreamingResponse
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/staticfiles.py
import dataclasses
import datetime
from collections import defaultdict, deque
from collections.abc import Callable
from decimal import Decimal
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/telemetry/_api.py
from collections.abc import Mapping, Sequence
from typing import Annotated, Any, TypedDict

from annotated_doc import Doc
from pydantic import BaseModel, create_model
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/telemetry/_asgi.py
from starlette.staticfiles import StaticFiles as StaticFiles  # noqa
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/telemetry/_runtime.py
from collections.abc import Callable, Iterator, MutableMapping, Sequence
from contextlib import AbstractContextManager, contextmanager, nullcontext
from dataclasses import dataclass, field
from time import time_ns
from typing import Annotated, Any
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/telemetry/__init__.py
import os
from contextlib import nullcontext
from time import perf_counter, time_ns
from typing import Any
from urllib.parse import parse_qsl, urlencode, urlsplit
import atexit
import os
import threading
from collections.abc import Callable
from typing import Any, cast
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/applications.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/_compat/shared.py
from ._api import TelemetryConfig as TelemetryConfig
from ._api import TelemetryData as TelemetryData
from ._api import get_telemetry_data as get_telemetry_data
import os
from collections.abc import Awaitable, Callable, Coroutine, Sequence
from enum import Enum
from typing import Annotated, Any, Literal, TypeVar

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/_compat/__init__.py
import types
import typing
import warnings
from collections import deque
from collections.abc import Mapping, Sequence
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/_compat/v2.py
from .shared import PYDANTIC_VERSION_MINOR_TUPLE as PYDANTIC_VERSION_MINOR_TUPLE
from .shared import annotation_is_pydantic_v1 as annotation_is_pydantic_v1
from .shared import field_annotation_is_scalar as field_annotation_is_scalar
from .shared import (
    field_annotation_is_scalar_sequence as field_annotation_is_scalar_sequence,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/utils.py
import re
import warnings
from collections.abc import Sequence
from copy import copy
from dataclasses import dataclass, is_dataclass
def get_authorization_scheme_param(
    authorization_header_value: str | None,
) -> tuple[str, str]:
    if not authorization_header_value:
        return "", ""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/api_key.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/open_id_connect_url.py
from .api_key import APIKeyCookie as APIKeyCookie
from .api_key import APIKeyHeader as APIKeyHeader
from .api_key import APIKeyQuery as APIKeyQuery
from .http import HTTPAuthorizationCredentials as HTTPAuthorizationCredentials
from .http import HTTPBasic as HTTPBasic
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/http.py
from typing import Annotated

from annotated_doc import Doc
from fastapi.openapi.models import APIKey, APIKeyIn
from fastapi.security.base import SecurityBase
from typing import Annotated

from annotated_doc import Doc
from fastapi.openapi.models import OpenIdConnect as OpenIdConnectModel
from fastapi.security.base import SecurityBase
import binascii
from base64 import b64decode
from typing import Annotated

from annotated_doc import Doc
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/oauth2.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/security/base.py
from typing import Annotated, Any, cast

from annotated_doc import Doc
from fastapi.exceptions import HTTPException
from fastapi.openapi.models import OAuth2 as OAuth2Model
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/responses.md
from fastapi.openapi.models import SecurityBase as SecurityBaseModel


class SecurityBase:
    model: SecurityBaseModel
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/other-tools.md
# Responses

## Return Type or Response Model

When possible, include a return type. It will be used to validate, filter, document, and serialize the response.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/path-operations.md
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/pydantic.md
# Other Tools

## uv

If uv is available, use it to manage dependencies.
# Path Operations and Routing

## Including Routers

When declaring routers, prefer to add router-level parameters like prefix, tags, and shared dependencies to the router itself instead of in `include_router()`.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/dependencies.md
# Pydantic

## Do not use Ellipsis

Do not use `...` as a default value for required parameters or model fields. It's not needed and not recommended.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/references/streaming.md
# Dependency Injection

Use dependencies when:

* They can't be declared in Pydantic validation and require additional logic
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/.agents/skills/fastapi/SKILL.md
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/__main__.py
# Streaming

## Stream JSON Lines

To stream JSON Lines, declare the return type and use `yield` to return the data.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/testclient.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/__init__.py
from fastapi.cli import main

main()
---
name: fastapi
description: FastAPI best practices and conventions. Use when working with FastAPI APIs, Pydantic models, dependencies, streaming responses including Server-Sent Events (SSE), and serving frontend apps. Keeps FastAPI code clean and up to date with the latest features and patterns.
---

from starlette.testclient import TestClient as TestClient  # noqa
"""FastAPI framework, high performance, easy to learn, fast to code, ready for production"""

__version__ = "0.142.2"

from starlette import status as status
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/concurrency.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/types.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/openapi/utils.py
import types
from collections.abc import Callable
from enum import Enum
from typing import Any, TypeVar, Union

from collections.abc import AsyncGenerator
from contextlib import AbstractContextManager
from contextlib import asynccontextmanager as asynccontextmanager
from typing import TypeVar

import copy
import http.client
import inspect
import warnings
from collections.abc import Sequence
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/openapi/docs.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/openapi/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/openapi/models.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/openapi/constants.py
import json
from typing import Annotated, Any

from annotated_doc import Doc
from fastapi.encoders import jsonable_encoder
from collections.abc import Callable, Iterable, Mapping
from enum import Enum
from typing import Annotated, Any, Literal, Optional, Union

from fastapi._compat import with_info_plain_validator_function
METHODS_WITH_BODY = {"GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"}
REF_PREFIX = "#/components/schemas/"
REF_TEMPLATE = "#/components/schemas/{model}"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/background.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/requests.py
from collections.abc import Callable
from typing import Annotated, Any

from annotated_doc import Doc
from fastapi.telemetry._api import _operation
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/responses.py
from starlette.requests import HTTPConnection as HTTPConnection  # noqa: F401
from starlette.requests import Request as Request  # noqa: F401
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/exception_handlers.py
import importlib
from typing import Any, Protocol, cast

from fastapi.exceptions import FastAPIDeprecationWarning
from fastapi.sse import EventSourceResponse as EventSourceResponse  # noqa
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/params.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/cli.py
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError, WebSocketRequestValidationError
from fastapi.utils import is_body_allowed_for_status_code
from fastapi.websockets import WebSocket
from starlette.exceptions import HTTPException
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/asyncexitstack.py
import warnings
from collections.abc import Callable, Sequence
from dataclasses import dataclass
from enum import Enum
from typing import Annotated, Any, Literal
try:
    from fastapi_cli.cli import main as cli_main

except ImportError:  # pragma: no cover
    cli_main = None  # type: ignore # ty: ignore[unused-ignore-comment]
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/__init__.py
from contextlib import AsyncExitStack

from starlette.types import ASGIApp, Receive, Scope, Send


[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/wsgi.py
from starlette.middleware import Middleware as Middleware
from starlette.middleware.wsgi import (
    WSGIMiddleware as WSGIMiddleware,
)  # pragma: no cover # noqa
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/gzip.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/httpsredirect.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/trustedhost.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/middleware/cors.py
from starlette.middleware.httpsredirect import (  # noqa
    HTTPSRedirectMiddleware as HTTPSRedirectMiddleware,
)
from starlette.middleware.gzip import GZipMiddleware as GZipMiddleware  # noqa
from starlette.middleware.trustedhost import (  # noqa
    TrustedHostMiddleware as TrustedHostMiddleware,
)
from starlette.middleware.cors import CORSMiddleware as CORSMiddleware  # noqa
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/param_functions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/templating.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/dependencies/utils.py
from collections.abc import Callable, Sequence
from typing import Annotated, Any, Literal

from annotated_doc import Doc
from fastapi import params
from starlette.templating import Jinja2Templates as Jinja2Templates  # noqa
import dataclasses
import inspect
import sys
from collections.abc import (
    AsyncGenerator,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/dependencies/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/dependencies/models.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/fastapi/datastructures.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/functional_serializers.py
import inspect
import sys
from collections.abc import Callable
from dataclasses import dataclass, field
from functools import lru_cache, partial
from collections.abc import Callable, Mapping
from typing import (
    Annotated,
    Any,
    BinaryIO,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/datetime_parse.py
"""This module contains related classes and functions for serialization."""

from __future__ import annotations

import dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/errors.py
"""The `utils` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""The `datetime_parse` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""Pydantic-specific errors."""

from __future__ import annotations as _annotations

import re
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/datetime_parse.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/errors.py
import keyword
import warnings
import weakref
from collections import OrderedDict, defaultdict, deque
from copy import deepcopy
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/class_validators.py
"""
Functions to parse datetime objects.

We're using regular expressions rather than time.strptime because:
- They provide both validation and parsing.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/dataclasses.py
from decimal import Decimal
from pathlib import Path
from typing import TYPE_CHECKING, Any, Callable, Sequence, Set, Tuple, Type, Union

from pydantic.v1.typing import display_as_type
import warnings
from collections import ChainMap
from functools import partial, partialmethod, wraps
from itertools import chain
from types import FunctionType
"""
The main purpose is to enhance stdlib dataclasses by adding validation
A pydantic dataclass can be generated from scratch or from a stdlib one.

Behind the scene, a pydantic dataclass is just like a regular one on which we attach
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/_hypothesis_plugin.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/main.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/decorator.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/json.py
"""
Register Hypothesis strategies for Pydantic custom types.

This enables fully-automatic generation of test data for most Pydantic classes.

import sys
import warnings
from abc import ABCMeta
from copy import deepcopy
from enum import Enum
from functools import wraps
from typing import TYPE_CHECKING, Any, Callable, Dict, List, Mapping, Optional, Tuple, Type, TypeVar, Union, overload

from pydantic.v1 import validator
from pydantic.v1.config import Extra
import datetime
from collections import deque
from decimal import Decimal
from enum import Enum
from ipaddress import IPv4Address, IPv4Interface, IPv4Network, IPv6Address, IPv6Interface, IPv6Network
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/annotated_types.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/color.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/validators.py
import sys
from typing import TYPE_CHECKING, Any, Dict, FrozenSet, NamedTuple, Type

from pydantic.v1.fields import Required
from pydantic.v1.main import BaseModel, create_model
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/typing.py
"""
Color definitions are  used as per CSS3 specification:
http://www.w3.org/TR/css3-color/#svg-color

A few colors have multiple names referring to the sames colors, eg. `grey` and `gray` or `aqua` and `cyan`.
import math
import re
from collections import OrderedDict, deque
from collections.abc import Hashable as CollectionsHashable
from datetime import date, datetime, time, timedelta
import functools
import operator
import sys
import typing
from collections.abc import Callable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/mypy.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/networks.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/__init__.py
import sys
from configparser import ConfigParser
from typing import Any, Callable, Dict, List, Optional, Set, Tuple, Type as TypingType, Union

from mypy.errorcodes import ErrorCode
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/fields.py
import re
from ipaddress import (
    IPv4Address,
    IPv4Interface,
    IPv4Network,
# flake8: noqa
from pydantic.v1 import dataclasses
from pydantic.v1.annotated_types import create_model_from_namedtuple, create_model_from_typeddict
from pydantic.v1.class_validators import root_validator, validator
from pydantic.v1.config import BaseConfig, ConfigDict, Extra
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/types.py
import copy
import re
from collections import Counter as CollectionCounter, defaultdict, deque
from collections.abc import Callable, Hashable as CollectionsHashable, Iterable as CollectionsIterable
from typing import (
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/config.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/tools.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/error_wrappers.py
import abc
import math
import re
import warnings
from datetime import date
import json
from enum import Enum
from typing import TYPE_CHECKING, Any, Callable, Dict, ForwardRef, Optional, Tuple, Type, Union

from typing_extensions import Literal, Protocol
import json
from functools import lru_cache
from pathlib import Path
from typing import TYPE_CHECKING, Any, Callable, Optional, Type, TypeVar, Union

import json
from typing import TYPE_CHECKING, Any, Dict, Generator, List, Optional, Sequence, Tuple, Type, Union

from pydantic.v1.json import pydantic_encoder
from pydantic.v1.utils import Representation
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/schema.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/parse.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/version.py
import re
import warnings
from collections import defaultdict
from dataclasses import is_dataclass
from datetime import date, datetime, time, timedelta
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/generics.py
import json
import pickle
from enum import Enum
from pathlib import Path
from typing import Any, Callable, Union
__all__ = 'compiled', 'VERSION', 'version_info'

VERSION = '1.10.26'

try:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/v1/env_settings.py
import functools
import operator
import sys
import types
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/class_validators.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/dataclasses.py
import os
import warnings
from pathlib import Path
from typing import AbstractSet, Any, Callable, ClassVar, Dict, List, Mapping, Optional, Tuple, Type, Union

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/annotated_handlers.py
"""`class_validators` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""Provide an enhanced dataclass that performs validation."""

from __future__ import annotations as _annotations

import dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/validate_call_decorator.py
"""Type annotations to use with `__get_pydantic_core_schema__` and `__get_pydantic_json_schema__`."""

from __future__ import annotations as _annotations

from typing import TYPE_CHECKING, Any, Union
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/main.py
"""Decorator for validating function calls."""

from __future__ import annotations as _annotations

import inspect
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/decorator.py
"""Logic for creating models."""

# Because `dict` is in the local namespace of the `BaseModel` class, we use `Dict` for annotations.
# TODO v3 fallback to `dict` when the deprecated `dict` method gets removed.
# ruff: noqa: UP035
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/json.py
"""The `decorator` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/class_validators.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/decorator.py
"""The `json` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""Old `@validator` and `@root_validator` function validators from V1."""

from __future__ import annotations as _annotations

from functools import partial, partialmethod
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/json.py
import warnings
from collections.abc import Mapping
from functools import wraps
from typing import TYPE_CHECKING, Any, Callable, Optional, TypeVar, Union, overload

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/__init__.py
import datetime
import warnings
from collections import deque
from decimal import Decimal
from enum import Enum
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/copy_internals.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/config.py
from __future__ import annotations as _annotations

import typing
from copy import deepcopy
from enum import Enum
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/tools.py
from __future__ import annotations as _annotations

import warnings
from typing import TYPE_CHECKING, Any, Literal

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/deprecated/parse.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/json_schema.py
from __future__ import annotations

import json
import warnings
from typing import TYPE_CHECKING, Any, Callable, TypeVar, Union
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/color.py
from __future__ import annotations

import json
import pickle
import warnings
"""!!! abstract "Usage Documentation"
    [JSON Schema](../concepts/json_schema.md)

The `json_schema` module contains classes and functions to allow the way [JSON Schema](https://json-schema.org/)
is generated to be customized.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_mock_val_ser.py
"""Color definitions are used as per the CSS3
[CSS Color Module Level 3](http://www.w3.org/TR/css3-color/#svg-color) specification.

A few colors have multiple names referring to the sames colors, eg. `grey` and `gray` or `aqua` and `cyan`.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_utils.py
from __future__ import annotations

from collections.abc import Iterator, Mapping
from typing import TYPE_CHECKING, Any, Callable, Generic, Literal, TypeVar, Union

"""Bucket of reusable internal utilities.

This should be reduced as much as possible with functions only used in one place, moved to that place.
"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_schema_generation_shared.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_repr.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_validators.py
"""Types and utility functions used by various other internal tools."""

from __future__ import annotations

from typing import TYPE_CHECKING, Any, Callable, Literal
"""Tools to provide pretty/human-readable display of objects."""

from __future__ import annotations as _annotations

import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_discriminated_union.py
"""Validator functions for standard library types.

Import of this module is deferred since it contains imports of many standard library modules.
"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_known_annotated_metadata.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_config.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/__init__.py
from __future__ import annotations as _annotations

from collections.abc import Hashable, Sequence
from typing import TYPE_CHECKING, Any, cast

from __future__ import annotations

from collections import defaultdict
from collections.abc import Iterable
from copy import copy
from __future__ import annotations as _annotations

import warnings
from contextlib import contextmanager
from re import Pattern
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_validate_call.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_git.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_internal_dataclass.py
from __future__ import annotations as _annotations

import functools
import inspect
from collections.abc import Awaitable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_import_utils.py
import sys

# `slots` is available on Python >= 3.10
if sys.version_info >= (3, 10):
    slots_true = {'slots': True}
"""Git utilities, adopted from mypy's git utilities (https://github.com/python/mypy/blob/master/mypy/git.py)."""

from __future__ import annotations

import subprocess
from functools import cache
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pydantic import BaseModel
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_fields.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_docs_extraction.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_dataclasses.py
"""Private logic related to fields (the `Field()` function and `FieldInfo` class), and arguments to `Annotated`."""

from __future__ import annotations as _annotations

import dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_schema_gather.py
"""Utilities related to attribute docstring extraction."""

from __future__ import annotations

import ast
"""Private logic for creating pydantic dataclasses."""

from __future__ import annotations as _annotations

import copy
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_core_metadata.py
# pyright: reportTypedDictNotRequiredAccess=false, reportGeneralTypeIssues=false, reportArgumentType=false, reportAttributeAccessIssue=false
from __future__ import annotations

from dataclasses import dataclass, field
from typing import TypedDict
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_generics.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_namespace_utils.py
from __future__ import annotations as _annotations

from typing import TYPE_CHECKING, Any, TypedDict, cast
from warnings import warn

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_model_construction.py
from __future__ import annotations

import sys
from collections.abc import Generator, Iterator, Mapping
from contextlib import contextmanager
"""Private logic for creating models."""

from __future__ import annotations as _annotations

import operator
from __future__ import annotations

import operator
import sys
import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_signature.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_generate_schema.py
from __future__ import annotations

import dataclasses
from inspect import Parameter, Signature
from typing import TYPE_CHECKING, Any, Callable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_typing_extra.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_decorators.py
"""Convert python types to pydantic-core schema."""

from __future__ import annotations as _annotations

import collections.abc
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_decorators_v1.py
"""Logic for interacting with type annotations, mostly extensions, shims and hacks to wrap Python's typing module."""

from __future__ import annotations

import collections.abc
"""Logic related to validators applied to models etc. via the `@field_validator` and `@model_validator` decorators."""

from __future__ import annotations as _annotations

import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_core_utils.py
"""Logic for V1 validators, e.g. `@validator` and `@root_validator`."""

from __future__ import annotations as _annotations

from inspect import Parameter, signature
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_forward_ref.py
from __future__ import annotations

import inspect
from collections.abc import Mapping, Sequence
from typing import TYPE_CHECKING, Any, Union
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_internal/_serializers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/validators.py
from __future__ import annotations as _annotations

from dataclasses import dataclass
from typing import Union

from __future__ import annotations

import collections
import collections.abc
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/typing.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/mypy.py
"""The `validators` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/networks.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/__init__.py
"""This module includes classes and functions designed specifically for use with the mypy plugin."""

from __future__ import annotations

import sys
"""`typing` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""The networks module contains types for common network-related fields."""

from __future__ import annotations as _annotations

import dataclasses as _dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/functional_validators.py
from importlib import import_module
from typing import TYPE_CHECKING
from warnings import warn

from ._migration import getattr_migration
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/fields.py
"""This module contains related classes and functions for validation."""

from __future__ import annotations as _annotations

import dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/types.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/config.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/aliases.py
"""Defining fields on models."""

from __future__ import annotations as _annotations

import dataclasses
"""Configuration for Pydantic models."""

from __future__ import annotations as _annotations

import warnings
"""The types module contains custom types used by pydantic."""

from __future__ import annotations as _annotations

import base64
"""Support for alias configurations."""

from __future__ import annotations

import dataclasses
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/tools.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/experimental/arguments_schema.py
"""The `tools` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/experimental/__init__.py
"""Experimental module exposing a function to generate a core schema that validates callable arguments."""

from __future__ import annotations

from collections.abc import Callable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/experimental/pipeline.py
"""The "experimental" module of pydantic contains potential new features that are subject to change."""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/experimental/missing_sentinel.py
"""Experimental pipeline API functionality. Be careful with this API, it's subject to change."""

from __future__ import annotations

import datetime
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/error_wrappers.py
"""Experimental module exposing a function a `MISSING` sentinel."""

from pydantic_core import MISSING

__all__ = ('MISSING',)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/schema.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/_migration.py
"""The `error_wrappers` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/parse.py
"""The `schema` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
import sys
from typing import Any, Callable

from pydantic.warnings import PydanticDeprecatedSince20

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/type_adapter.py
"""The `parse` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/root_model.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/plugin/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/plugin/_loader.py
"""Type adapter specification."""

from __future__ import annotations as _annotations

import sys
"""RootModel class and type definitions."""

from __future__ import annotations as _annotations

from copy import copy, deepcopy
"""!!! abstract "Usage Documentation"
    [Build a Plugin](../concepts/plugins.md#build-a-plugin)

Plugin interface for Pydantic plugins, and related types.
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/plugin/_schema_validator.py
from __future__ import annotations

import importlib.metadata as importlib_metadata
import os
import warnings
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/warnings.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/alias_generators.py
"""Pluggable schema validator for pydantic."""

from __future__ import annotations

import functools
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/version.py
"""Pydantic-specific warnings."""

from __future__ import annotations as _annotations

from .version import version_short
"""Alias generators for converting between different capitalization conventions."""

import re

__all__ = ('to_pascal', 'to_camel', 'to_snake')
"""The `version` module holds the version information for Pydantic."""

from __future__ import annotations as _annotations

import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/generics.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic/env_settings.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_readers.py
"""The `generics` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
"""The `env_settings` module is a backport module from V1."""

from ._migration import getattr_migration

__getattr__ = getattr_migration(__name__)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_util.py
# Code to read HTTP data
#
# Strategy: each reader is a callable which takes a ReceiveBuffer object, and
# either:
# 1) consumes some of it and returns an Event
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_abnf.py
from typing import Any, Dict, NoReturn, Pattern, Tuple, Type, TypeVar, Union

__all__ = [
    "ProtocolError",
    "LocalProtocolError",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/__init__.py
# We use native strings for all the re patterns, to take advantage of string
# formatting, and then convert to bytestrings when compiling the final re
# objects.

# https://svn.tools.ietf.org/svn/wg/httpbis/specs/rfc7230.html#whitespace
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_state.py
# A highish-level implementation of the HTTP/1.1 wire protocol (RFC 7230),
# containing no networking code at all, loosely modelled on hyper-h2's generic
# implementation of HTTP/2 (and in particular the h2.connection.H2Connection
# class). There's still a bunch of subtle details you need to get right if you
# want to make this actually useful, because it doesn't implement all the
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_writers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_connection.py
################################################################
# The core state machine
################################################################
#
# Rule 1: everything that affects the state machine and state transitions must
# Code to read HTTP data
#
# Strategy: each writer takes an event + a write-some-bytes function, which is
# calls.
#
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_headers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_version.py
# This contains the main Connection class. Everything in h11 revolves around
# this.
from typing import (
    Any,
    Callable,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_receivebuffer.py
import re
from typing import AnyStr, cast, List, overload, Sequence, Tuple, TYPE_CHECKING, Union

from ._abnf import field_name, field_value
from ._util import bytesify, LocalProtocolError, validate
# This file must be kept very simple, because it is consumed from several
# places -- it is imported by h11/__init__.py, execfile'd by setup.py, etc.

# We use a simple scheme:
#   1.0.0 -> 1.0.0+dev -> 1.1.0 -> 1.1.0+dev
import re
import sys
from typing import List, Optional, Union

__all__ = ["ReceiveBuffer"]
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/h11/_events.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/typing_extensions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/typing_inspection/typing_objects.py
# High level events that make up HTTP/1.1 conversations. Loosely inspired by
# the corresponding events in hyper-h2:
#
#     http://python-hyper.org/h2/en/stable/api.html#events
#
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/typing_inspection/__init__.py
import abc
import builtins
import collections
import collections.abc
import contextlib
"""Low-level introspection utilities for [`typing`][] members.

The provided functions in this module check against both the [`typing`][] and [`typing_extensions`][]
variants, if they exists and are different.
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/typing_inspection/introspection.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip-26.2.1.dist-info/licenses/src/pip/_vendor/idna/LICENSE.md
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/propagators/_envcarrier.py
"""High-level introspection utilities, used to inspect type annotations."""

from __future__ import annotations

import sys
BSD 3-Clause License

Copyright (c) 2013-2026, Kim Davies and contributors.
All rights reserved.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/propagators/composite.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

"""Environment variable carriers for text map propagators.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/propagators/textmap.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/propagate/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0
import collections.abc
import logging

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/attributes/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

import abc
import typing
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

"""
API for propagation of context.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/_logs/_internal/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

# pyright: reportUnnecessaryIsInstance=false

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/_logs/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/_logs/severity/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0
"""
The OpenTelemetry logging API describes the classes used to generate logs and events.

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0
"""
The OpenTelemetry logging API describes the classes used to generate logs and events.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/context/context.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

import enum

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/context/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/context/contextvars_context.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/metrics/_internal/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

# pylint: disable=too-many-ancestors

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/metrics/_internal/instrument.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/metrics/_internal/observation.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/metrics/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

# pylint: disable=too-many-ancestors

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/_once.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0


from opentelemetry.context import Context
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

"""
The OpenTelemetry metrics API  describes the classes used to generate
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/types.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from collections.abc import Callable
from threading import Lock
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/re.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/_providers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/_decorator.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from collections.abc import Mapping
from logging import getLogger
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from collections.abc import Mapping, Sequence

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from logging import getLogger
from os import environ
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

import contextlib
import functools
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/util/_importlib_metadata.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/baggage/propagation/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/baggage/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

"""
Caching and compatibility wrapper for standard library ``importlib.metadata``.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/environment_variables/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0
#
from collections.abc import Iterable, Iterator, Mapping
from logging import getLogger
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from collections.abc import Mapping
from logging import getLogger
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/version/__init__.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

OTEL_LOGS_EXPORTER = "OTEL_LOGS_EXPORTER"
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/trace/propagation/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/trace/propagation/tracecontext.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/trace/span.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from opentelemetry.context import create_key, get_value, set_value
from opentelemetry.context.context import Context
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0
#
import re

# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

__version__ = "1.45.0"
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/trace/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/opentelemetry/trace/status.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_exceptions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_synchronization.py
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

"""
The OpenTelemetry tracing API describes the classes used to generate
# Copyright The OpenTelemetry Authors
# SPDX-License-Identifier: Apache-2.0

import enum
import logging
import contextlib
import typing

ExceptionMapping = typing.Mapping[typing.Type[Exception], typing.Type[Exception]]

from __future__ import annotations

import threading
import types

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_api.py
from __future__ import annotations

import select
import socket
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_models.py
from __future__ import annotations

import contextlib
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/__init__.py
from __future__ import annotations

import base64
import ssl
import typing
from ._api import request, stream
from ._async import (
    AsyncConnectionInterface,
    AsyncConnectionPool,
    AsyncHTTP2Connection,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_trace.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/http2.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/http11.py
from __future__ import annotations

import inspect
import logging
import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/__init__.py
from __future__ import annotations

import enum
import logging
import ssl
from __future__ import annotations

import enum
import logging
import time
from .connection import HTTPConnection
from .connection_pool import ConnectionPool
from .http11 import HTTP11Connection
from .http_proxy import HTTPProxy
from .interfaces import ConnectionInterface
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/interfaces.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/connection_pool.py
from __future__ import annotations

import contextlib
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/socks_proxy.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/http_proxy.py
from __future__ import annotations

import ssl
import sys
import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_sync/connection.py
from __future__ import annotations

import logging
import ssl

from __future__ import annotations

import base64
import logging
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/http2.py
from __future__ import annotations

import itertools
import logging
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/http11.py
from __future__ import annotations

import enum
import logging
import time
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/interfaces.py
from __future__ import annotations

import enum
import logging
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/connection_pool.py
from .connection import AsyncHTTPConnection
from .connection_pool import AsyncConnectionPool
from .http11 import AsyncHTTP11Connection
from .http_proxy import AsyncHTTPProxy
from .interfaces import AsyncConnectionInterface
from __future__ import annotations

import contextlib
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/socks_proxy.py
from __future__ import annotations

import ssl
import sys
import types
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/http_proxy.py
from __future__ import annotations

import logging
import ssl

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_async/connection.py
from __future__ import annotations

import base64
import logging
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_ssl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/mock.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/anyio.py
from __future__ import annotations

import itertools
import logging
import ssl
import ssl

import certifi


from __future__ import annotations

import ssl
import typing

from __future__ import annotations

import ssl
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/sync.py
from __future__ import annotations

import functools
import socket
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/trio.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/auto.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore/_backends/base.py
from __future__ import annotations

import ssl
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/supervisors/basereload.py
from __future__ import annotations

import typing

from .._synchronization import current_async_library
from __future__ import annotations

import ssl
import time
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/supervisors/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/supervisors/watchfilesreload.py
from __future__ import annotations

import logging
import os
import signal
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/supervisors/multiprocess.py
from __future__ import annotations

from typing import TYPE_CHECKING

from uvicorn.supervisors.basereload import BaseReload
from __future__ import annotations

from collections.abc import Callable
from pathlib import Path
from socket import socket
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/supervisors/statreload.py
from __future__ import annotations

import logging
import os
import pickle
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/logging.py
from __future__ import annotations

import logging
from collections.abc import Callable, Iterator
from pathlib import Path
from __future__ import annotations

import http
import logging
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/_subprocess.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/main.py
"""
Some light wrappers around Python's multiprocessing, to deal with cleanly
starting child processes.
"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/lifespan/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/lifespan/off.py
from __future__ import annotations

import asyncio
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/lifespan/on.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/_ansi.py
from __future__ import annotations

from typing import Any

from uvicorn import Config
from __future__ import annotations

import asyncio
import logging
from asyncio import Queue
from __future__ import annotations

_ANSI_COLORS = {
    "black": 30,
    "red": 31,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/__main__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/server.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/_types.py
import uvicorn

if __name__ == "__main__":
    uvicorn.main()
from uvicorn.config import Config
from uvicorn.main import Server, main, run

__version__ = "0.54.0"
__all__ = ["main", "run", "Config", "Server"]
from __future__ import annotations

import asyncio
import contextlib
import functools
"""
Copyright (c) Django Software Foundation and individual contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/config.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/loops/uvloop.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/loops/__init__.py
from __future__ import annotations

import asyncio
import inspect
import json
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/loops/asyncio.py
from __future__ import annotations

import asyncio
from collections.abc import Callable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/loops/zuvloop.py
from __future__ import annotations

import asyncio
import sys
from collections.abc import Callable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/loops/auto.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/importer.py
from __future__ import annotations

import asyncio
from collections.abc import Callable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/utils.py
from __future__ import annotations

import asyncio
from collections.abc import Callable

import importlib
from typing import Any


class ImportFromStringError(Exception):
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/__init__.py
from __future__ import annotations

import asyncio
import socket
import urllib.parse
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/websockets/websockets_impl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/websockets/wsproto_impl.py
from __future__ import annotations

import asyncio
import logging
import random
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/websockets/__init__.py
from __future__ import annotations

import asyncio
import http
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/websockets/auto.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/websockets/websockets_sansio_impl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/h11_impl.py
from __future__ import annotations

import asyncio
from collections.abc import Callable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/__init__.py
from __future__ import annotations

import asyncio
import email.utils
import logging
from __future__ import annotations

import asyncio
import contextvars
import http
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/zttp_impl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/auto_zttp_impl.py
from __future__ import annotations

import asyncio
import contextvars
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/flow_control.py
from __future__ import annotations

import asyncio
from typing import Any, ClassVar

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/zttp_h2_impl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/httptools_impl.py
import asyncio

from uvicorn._types import ASGIReceiveCallable, ASGISendCallable, Scope

CLOSE_HEADER = (b"connection", b"close")
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/protocols/http/auto.py
from __future__ import annotations

import asyncio
import contextvars
import logging
from __future__ import annotations

import asyncio
import contextvars
import http
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/middleware/asgi2.py
from __future__ import annotations

import asyncio

AutoHTTPProtocol: type[asyncio.Protocol]
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/middleware/proxy_headers.py
from uvicorn._types import (
    ASGI2Application,
    ASGIReceiveCallable,
    ASGISendCallable,
    Scope,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/middleware/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/middleware/wsgi.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/middleware/message_logger.py
from __future__ import annotations

import functools
import ipaddress

import logging
from typing import Any

from uvicorn._types import (
    ASGI3Application,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/workers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn/_compat.py
from __future__ import annotations

import asyncio
import concurrent.futures
import io
from __future__ import annotations

import asyncio
import logging
import signal
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/certifi/tests/__init__.py
from __future__ import annotations

import asyncio
import sys
from collections.abc import Callable, Coroutine
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/certifi/tests/test_certify.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/certifi/__main__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/certifi/__init__.py
import os
import unittest

import certifi

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/certifi/core.py
from .core import contents, where

__all__ = ["contents", "where"]
__version__ = "2026.07.22"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/codec.py
import argparse

from certifi import contents, where

parser = argparse.ArgumentParser()
"""
certifi.py
~~~~~~~~~~

This module returns the installation location of cacert.pem or its contents.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/idnadata.py
from __future__ import annotations

import codecs
from typing import Any

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/__main__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/__init__.py
# This file is automatically generated by tools/idna-data

__version__ = "18.0.0"

scripts = {
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/compat.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/intranges.py
import sys

from .cli import main

if __name__ == "__main__":
from .core import (
    IDNABidiError,
    IDNAError,
    InvalidCodepoint,
    InvalidCodepointContext,
from __future__ import annotations

from typing import Any

from .core import decode, encode
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/cli.py
"""
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/package_data.py
"""Command-line interface for the :mod:`idna` package.

Invoked via ``python -m idna``. See :func:`main` for the entry point.
"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/core.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/idna/uts46data.py
__version__ = "3.20"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/annotated_types/test_cases.py
# This file is automatically generated by tools/idna-data

from __future__ import annotations

from array import array
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/annotated_types/__init__.py
from __future__ import annotations

import bisect
import re
import unicodedata
import math
from collections.abc import Iterable, Iterator
from datetime import date, datetime, timedelta, timezone
from decimal import Decimal
from typing import Annotated, Any, NamedTuple
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pydantic_core-2.46.5.dist-info/sboms/pydantic-core.cyclonedx.json
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_exceptions.py
import math
import types
from collections.abc import Callable, Iterator
from dataclasses import dataclass
from datetime import tzinfo
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_api.py
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "version": 1,
  "serialNumber": "urn:uuid:d4d55b5d-6b90-45ad-8e6f-523db83783e6",
"""
Our exception hierarchy:

* HTTPError
  x RequestError
from __future__ import annotations

import ipaddress
import os
import re
from __future__ import annotations

import typing
from contextlib import contextmanager

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_urlparse.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_models.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_main.py
"""
An implementation of `urlparse` that provides URL validation and normalization
as described by RFC3986.

We rely on this implementation rather than the one in Python's stdlib, because:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_config.py
from __future__ import annotations

import codecs
import datetime
import email.message
from __future__ import annotations

import functools
import json
import sys
from __future__ import annotations

import os
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/mock.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/default.py
from .__version__ import __description__, __title__, __version__
from ._api import *
from ._auth import *
from ._client import *
from ._config import *
from __future__ import annotations

import typing

from .._models import Request, Response
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/__init__.py
"""
Custom transports, with nicely configured defaults.

The following additional keyword arguments are currently supported by httpcore...

from .asgi import *
from .base import *
from .default import *
from .mock import *
from .wsgi import *
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/wsgi.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/asgi.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_transports/base.py
from __future__ import annotations

import io
import itertools
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_client.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_decoders.py
from __future__ import annotations

import typing

from .._models import Request, Response
from __future__ import annotations

import typing
from types import TracebackType

from __future__ import annotations

import datetime
import enum
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_types.py
"""
Handlers for Content-Encoding.

See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/__version__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_status_codes.py
"""
Type definitions for type checking purposes.
"""

from http.cookiejar import CookieJar
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_auth.py
__title__ = "httpx"
__description__ = "A next generation HTTP client, for Python 3."
__version__ = "0.28.1"
from __future__ import annotations

from enum import IntEnum

__all__ = ["codes"]
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_multipart.py
from __future__ import annotations

import hashlib
import os
import re
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_urls.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpx/_content.py
from __future__ import annotations

import io
import mimetypes
import os
from __future__ import annotations

import typing
from urllib.parse import parse_qs, unquote, urlencode

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/_utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/exceptions.py
from __future__ import annotations

import collections.abc as cabc
import os
import re
from __future__ import annotations

import inspect
import warnings
from json import dumps as json_dumps
from __future__ import annotations

import enum
import typing as t

from __future__ import annotations

import collections.abc as cabc
import typing as t
from gettext import gettext as _
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/shell_completion.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/types.py
"""
Click is a simple Python module inspired by the stdlib optparse to make
writing command line scripts fun. Unlike other modules, it's based
around a simple API that does not come with too much magic and is
composable.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/_winconsole.py
from __future__ import annotations

import collections.abc as cabc
import os
import re
from __future__ import annotations

import abc
import collections.abc as cabc
import enum
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/testing.py
# This module is based on the excellent work by Adam Bartoš who
# provided a lot of what went into the implementation here in
# the discussion to issue1602 in the Python bug tracker.
#
# There are some general differences in regards to how this works
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/_textwrap.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/_termui_impl.py
from __future__ import annotations

import collections.abc as cabc
import contextlib
import io
from __future__ import annotations

import collections.abc as cabc
import textwrap
from contextlib import contextmanager
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/parser.py
"""
This module contains implementations for the termui module. To keep the
import time of Click down, some infrequently used functionality is
placed in this module and only imported as needed.
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/core.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/termui.py
"""
This module started out as largely a copy paste from the stdlib's
optparse module with the features removed that we do not need from
optparse because we implement them in Click on a higher level (for
instance type handling, help formatting and a lot more).
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/formatting.py
from __future__ import annotations

import collections.abc as cabc
import enum
import errno
from __future__ import annotations

import collections.abc as cabc
import inspect
import io
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/globals.py
from __future__ import annotations

import collections.abc as cabc
from contextlib import contextmanager
from gettext import gettext as _
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/decorators.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/click/_compat.py
from __future__ import annotations

import typing as t
from threading import local

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/websockets.py
from __future__ import annotations

import inspect
import typing as t
from functools import update_wrapper
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/_utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/routing.py
from __future__ import annotations

import codecs
import collections.abc as cabc
import io
from __future__ import annotations

import enum
import json
from collections.abc import AsyncIterator, Iterable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/formparsers.py
from __future__ import annotations

import contextlib
import functools
import inspect
from __future__ import annotations

import functools
import re
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/schemas.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/exceptions.py
from __future__ import annotations

from collections.abc import AsyncGenerator
from dataclasses import dataclass, field
from enum import Enum
from __future__ import annotations

import http.client
from collections.abc import Mapping

from __future__ import annotations

import inspect
import re
from collections.abc import Callable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/staticfiles.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/applications.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/testclient.py
from __future__ import annotations

import errno
import importlib.util
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/convertors.py
from __future__ import annotations

from collections.abc import Awaitable, Callable, Mapping, Sequence
from typing import Any, ParamSpec, TypeVar

from __future__ import annotations

import contextlib
import inspect
import io
from __future__ import annotations

import math
import uuid
from typing import Any, ClassVar, Generic, TypeVar
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/concurrency.py
__version__ = "1.7.0"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/types.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/config.py
from __future__ import annotations

import functools
import warnings
from collections.abc import AsyncIterator, Callable, Coroutine, Iterable, Iterator
from collections.abc import Awaitable, Callable, Mapping, MutableMapping
from contextlib import AbstractAsyncContextManager
from typing import TYPE_CHECKING, Any, TypeVar

if TYPE_CHECKING:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/_exception_handler.py
from __future__ import annotations

import os
import warnings
from collections.abc import Callable, Iterator, Mapping, MutableMapping
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/background.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/authentication.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/requests.py
from __future__ import annotations

from typing import Any

from starlette._utils import is_async_callable
from __future__ import annotations

from collections.abc import Callable, Sequence
from typing import Any, ParamSpec

from __future__ import annotations

import json
import sys
from collections.abc import AsyncGenerator, Iterator, Mapping
from __future__ import annotations

import functools
import inspect
from collections.abc import Callable, Sequence
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/responses.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/errors.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/opentelemetry.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/exceptions.py
from __future__ import annotations

import html
import inspect
import sys
from __future__ import annotations

import hashlib
import http.cookies
import json
from __future__ import annotations

import re
from collections.abc import Sequence

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/sessions.py
from __future__ import annotations

from collections.abc import Mapping
from typing import Any

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/__init__.py
from __future__ import annotations

import json
import typing
from base64 import b64decode, b64encode
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/wsgi.py
from __future__ import annotations

from collections.abc import Awaitable, Callable, Iterator
from typing import Any, ParamSpec, Protocol

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/authentication.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/body_limit.py
from __future__ import annotations

import io
import math
import sys
from __future__ import annotations

from collections.abc import Callable

from starlette.authentication import (
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/gzip.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/httpsredirect.py
from __future__ import annotations

import zlib
from typing import NoReturn

from __future__ import annotations

from typing import cast

from starlette.datastructures import Headers
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/base.py
from starlette.datastructures import URL
from starlette.responses import PlainTextResponse, RedirectResponse
from starlette.types import ASGIApp, Receive, Scope, Send


[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/trustedhost.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/middleware/cors.py
from __future__ import annotations

from collections.abc import AsyncGenerator, AsyncIterable, Awaitable, Callable, Mapping, MutableMapping
from typing import Any, TypeVar

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/endpoints.py
from __future__ import annotations

from collections.abc import Sequence

from starlette._utils import parse_host_header
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/templating.py
from __future__ import annotations

import json
from collections.abc import Callable, Generator
from typing import Any, Literal
from __future__ import annotations

import functools
import re
from collections.abc import Collection
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/datastructures.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette/status.py
from __future__ import annotations

from collections.abc import Callable, Mapping, Sequence
from os import PathLike
from typing import TYPE_CHECKING, Any, overload
from __future__ import annotations

from collections.abc import ItemsView, Iterable, Iterator, KeysView, Mapping, MutableMapping, Sequence, ValuesView
from shlex import shlex
from typing import Any, BinaryIO, Literal, NamedTuple, TypeVar, cast
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/httpcore-1.0.9.dist-info/licenses/LICENSE.md
"""
HTTP codes
See HTTP Status Code Registry:
https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

Copyright © 2020, [Encode OSS Ltd](https://www.encode.io/).
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/annotated_doc/main.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/annotated_doc/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/__pip-runner__.py
class Doc:
    """Define the documentation of a type annotation using `Annotated`, to be
        used in class attributes, function and method parameters, return values,
        and variables.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/__main__.py
from .main import Doc as Doc

__version__ = "0.0.5"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/main.py
"""Execute exactly this copy of pip, within a different environment.

This file is named as it is, to ensure that this module can't be imported via
an import statement.
"""
import os
import sys

# Remove '' and current working directory from the first entry
# of sys.path, if present to avoid using current directory
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cache.py
from __future__ import annotations


def main(args: list[str] | None = None) -> int:
    """This is preserved for old console scripts that may still be referencing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/exceptions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/venv.py
"""Cache Management"""

from __future__ import annotations

import hashlib
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/noop.py
"""Exceptions used throughout package.

This module MUST NOT try to import from anything within `pip._internal` to
operate. This is expected to be importable from any/all files within the
subpackage and, thus, should not depend on them.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/__init__.py
from __future__ import annotations

import os
import sys
import sysconfig
from __future__ import annotations

import sys
from collections.abc import Iterable
from types import TracebackType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/virtual.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/installer.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/build_env/base.py
"""Build environments used for isolation during build backend calls."""

from pip._internal.build_env.base import (
    BuildEnvironment,
    BuildEnvironmentInstaller,
from __future__ import annotations

import os
import site
import sys
from __future__ import annotations

import logging
import sys
import textwrap
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/wheel.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/datetime.py
from __future__ import annotations

import abc
from collections.abc import Iterable
from contextlib import AbstractContextManager as ContextManager
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/logging.py
"""Support functions for working with wheel files."""

import logging
from email.message import Message
from email.parser import Parser
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/compatibility_tags.py
"""For when pip wants to check the date or time."""

import datetime
import sys

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/filesystem.py
from __future__ import annotations

import contextlib
import errno
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/packaging.py
"""Generate and work with PEP 425 Compatibility Tags."""

from __future__ import annotations

import re
from __future__ import annotations

import fnmatch
import os
import os.path
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/filetypes.py
from __future__ import annotations

import functools
import logging

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/__init__.py
"""Filetype information."""

from pip._internal.utils.misc import splitext

WHEEL_EXTENSION = ".whl"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/compat.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/egg_link.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/_log.py
"""Stuff that differs in different Python versions and platform
distributions."""

import importlib.resources
import locale
from __future__ import annotations

import os
import re
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/pylock.py
"""Customize logging

Defines custom logger class for the `logger.verbose(...)` method.

init_logging() must be called before any other modules that call logging.getLogger.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/entrypoints.py
from __future__ import annotations

import os
import re
from collections.abc import Iterable, Iterator
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/deprecation.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/urls.py
from __future__ import annotations

import itertools
import os
import shutil
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/misc.py
"""
A module that implements tooling to enable easy warnings about deprecations.
"""

from __future__ import annotations
import os
import string
import urllib.parse  # noqa: F401

from .compat import WINDOWS
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/temp_dir.py
from __future__ import annotations

import errno
import getpass
import hashlib
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/_jaraco_text.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/direct_url_helpers.py
from __future__ import annotations

import errno
import itertools
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/hashes.py
"""Functions brought over from jaraco.text.

These functions are not supposed to be used within `pip._internal`. These are
helper functions brought over from `jaraco.text` to enable vendoring newer
copies of `pkg_resources` without having to vendor `jaraco.text` and its entire
from __future__ import annotations

from pip._internal.models.direct_url import ArchiveInfo, DirectUrl, DirInfo, VcsInfo
from pip._internal.models.link import Link
from pip._internal.utils.urls import path_to_url
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/retry.py
from __future__ import annotations

import hashlib
from collections.abc import Iterable
from typing import TYPE_CHECKING, BinaryIO, NoReturn
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/subprocess.py
from __future__ import annotations

import functools
from collections.abc import Callable
from time import perf_counter, sleep
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/appdirs.py
from __future__ import annotations

import logging
import os
import shlex
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/virtualenv.py
"""
This code wraps the vendored appdirs module to so the return values are
compatible for the current pip code base.

The intention is to rewrite current usages gradually, keeping the tests pass,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/glibc.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/utils/unpacking.py
from __future__ import annotations

import logging
import os
import re
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/wheel.py
from __future__ import annotations

import os
import sys

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/build_tracker.py
"""Utilities related archives."""

from __future__ import annotations

import logging
from __future__ import annotations

import logging
import os

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/wheel_editable.py
from __future__ import annotations

import contextlib
import hashlib
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/metadata_editable.py
from __future__ import annotations

import logging
import os

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/build/metadata.py
"""Metadata generation logic for source distributions."""

import os

from pip._vendor.pyproject_hooks import BuildBackendHookCaller
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/install/wheel.py
"""Metadata generation logic for source distributions."""

import os

from pip._vendor.pyproject_hooks import BuildBackendHookCaller
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/install/__init__.py
"""Support for installing and building the "wheel" binary package format."""

from __future__ import annotations

import collections
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/prepare.py
"""For modules related to installing packages."""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/check.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/operations/freeze.py
"""Prepares a distribution for installation"""

# The following comment should be removed at some point in the future.
# mypy: strict-optional=False
from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/wheel.py
"""Validation of dependencies of packages"""

from __future__ import annotations

import logging
from __future__ import annotations

import collections
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/show.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/list.py
import logging
import os
import shutil
from optparse import Values

from __future__ import annotations

import logging
import string
from collections.abc import Generator, Iterable, Iterator
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/install.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/search.py
from __future__ import annotations

import contextlib
import json
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/download.py
from __future__ import annotations

import contextlib
import errno
import json
from __future__ import annotations

import logging
import shutil
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/debug.py
import logging
import os
from optparse import Values

from pip._internal.cli import cmdoptions
from __future__ import annotations

import logging
import os
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/cache.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/uninstall.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/completion.py
import os
import textwrap
from collections.abc import Callable
from optparse import Values

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/index.py
import logging
from optparse import Values

from pip._vendor.packaging.utils import canonicalize_name

import sys
import textwrap
from optparse import Values

from pip._internal.cli.base_command import Command
from __future__ import annotations

import json
import logging
from collections.abc import Callable, Iterable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/configuration.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/hash.py
"""
Package containing all pip commands
"""

from __future__ import annotations
from __future__ import annotations

import logging
import os
import subprocess
import hashlib
import logging
import sys
from optparse import Values

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/check.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/help.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/lock.py
import logging
from optparse import Values

from pip._internal.cli.base_command import Command
from pip._internal.cli.status_codes import ERROR, SUCCESS
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/freeze.py
from optparse import Values

from pip._internal.cli.base_command import Command
from pip._internal.cli.status_codes import SUCCESS
from pip._internal.exceptions import CommandError
import sys
from optparse import Values
from pathlib import Path

from pip._vendor import tomli_w
import sys
from optparse import Values

from pip._internal.cli import cmdoptions
from pip._internal.cli.base_command import Command
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/commands/inspect.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/index_command.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/req_command.py
import logging
from optparse import Values
from typing import Any

from pip._vendor.packaging.markers import default_environment
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/main.py
"""
Contains command classes which may interact with an index / the network.

Unlike its sister module, req_command, this module still uses lazy imports
so commands which don't always hit the network (e.g. list w/o --outdated or
"""Contains the RequirementCommand base class.

This class is in a separate module so the commands that do not always
need PackageFinder capability don't unnecessarily import the
PackageFinder machinery and all its vendored dependencies, etc.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/spinners.py
"""Primary application entrypoint."""

from __future__ import annotations

import locale
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/autocompletion.py
from __future__ import annotations

import contextlib
import itertools
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/status_codes.py
"""Subpackage containing all of pip's command line interface related code"""

# This file intentionally does not import submodules
"""Logic that powers autocompletion installed by ``pip completion``."""

from __future__ import annotations

import optparse
SUCCESS = 0
ERROR = 1
UNKNOWN_ERROR = 2
VIRTUALENV_NOT_FOUND = 3
PREVIOUS_BUILD_DIR_ERROR = 4
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/base_command.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/main_parser.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/progress_bars.py
"""Base Command class, and related routines"""

from __future__ import annotations

import contextlib
"""A single place for constructing and exposing the main parser"""

from __future__ import annotations

import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/parser.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/cmdoptions.py
from __future__ import annotations

import functools
import sys
from collections.abc import Callable, Generator, Iterable, Iterator
"""Base option parser setup"""

from __future__ import annotations

import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/cli/command_context.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/__init__.py
"""
shared options and groups

The principle here is to define options once, but *not* instantiate them
globally. One reason being that options with action='append' can carry state
from collections.abc import Generator
from contextlib import AbstractContextManager, ExitStack, contextmanager
from typing import TypeVar

_T = TypeVar("_T", covariant=True)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/wheel.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/candidate.py
from __future__ import annotations

from pip._internal.utils import _log

# init_logging() must be called before any call to logging.getLogger()
"""Represents a wheel file and provides access to the various parts of the
name that have meaning.
"""

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/format_control.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/direct_url.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/installation_report.py
from __future__ import annotations

from pip._vendor.packaging.utils import canonicalize_name

from pip._internal.exceptions import CommandError
"""PEP 610"""

from __future__ import annotations

import json
from collections.abc import Sequence
from typing import Any

from pip._vendor.packaging.markers import default_environment

from dataclasses import dataclass

from pip._vendor.packaging.version import Version
from pip._vendor.packaging.version import parse as parse_version

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/release_control.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/search_scope.py
from __future__ import annotations

from dataclasses import dataclass, field

from pip._vendor.packaging.utils import NormalizedName, canonicalize_name
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/index.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/__init__.py
import itertools
import logging
import os
import posixpath
import urllib.parse
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/link.py
import urllib.parse


class PackageIndex:
    """Represents a Package Index and provides easier access to endpoints"""
"""A package that contains models that represent entities."""
from __future__ import annotations

import datetime
import functools
import itertools
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/target_python.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/selection_prefs.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/models/scheme.py
from __future__ import annotations

import sys

from pip._vendor.packaging.tags import Tag
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/configuration.py
from __future__ import annotations

from dataclasses import dataclass

from pip._internal.models.format_control import FormatControl
"""
For types associated with installation schemes.

For a general overview of available schemes and their context, see
https://docs.python.org/3/install/index.html#alternate-installation.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/_json.py
"""Configuration management setup

Some terminology:
- name
  As written in config files.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/importlib/_dists.py
# Extracted from https://github.com/pfmoore/pkg_metadata
from __future__ import annotations

from email.header import Header, decode_header, make_header
from email.message import Message
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/importlib/__init__.py
from __future__ import annotations

import contextlib
import functools
import os
from __future__ import annotations

import email.message
import importlib.metadata
import pathlib
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/importlib/_envs.py
from ._dists import Distribution
from ._envs import Environment

__all__ = ["NAME", "Distribution", "Environment"]

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/importlib/_compat.py
from __future__ import annotations

import importlib.metadata
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/base.py
from __future__ import annotations

import importlib.metadata
import os
from typing import Any, Protocol, cast
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/metadata/pkg_resources.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/wheel_builder.py
from __future__ import annotations

import csv
import email.message
import functools
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/self_outdated_check.py
from __future__ import annotations

import email.message
import email.parser
import logging
"""Orchestrator for building wheels from InstallRequirements."""

from __future__ import annotations

import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/legacy/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/legacy/resolver.py
from __future__ import annotations

import datetime
import hashlib
import json
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/base.py
"""Dependency Resolution

The dependency resolution in pip is performed as follows:

for top-level requirements:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/requirements.py
from collections.abc import Callable

from pip._internal.req.req_install import InstallRequirement
from pip._internal.req.req_set import RequirementSet

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/candidates.py
from __future__ import annotations

from typing import Any

from pip._vendor.packaging.specifiers import SpecifierSet
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/found_candidates.py
from __future__ import annotations

import logging
import sys
from collections.abc import Iterable
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/__init__.py
"""Utilities to lazily create and visit candidates found.

Creating and visiting a candidate is a *very* costly operation. It involves
fetching, extracting, potentially building modules from source, and verifying
distribution metadata. It is therefore crucial for performance to keep
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/provider.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/reporter.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/factory.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/resolver.py
from __future__ import annotations

from collections import defaultdict
from collections.abc import Mapping
from logging import getLogger
from __future__ import annotations

import contextlib
import copy
import functools
from __future__ import annotations

import math
from collections import defaultdict
from collections.abc import Iterable, Iterator, Mapping, Sequence
from __future__ import annotations

import contextlib
import functools
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/resolution/resolvelib/base.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/bazaar.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/versioncontrol.py
from __future__ import annotations

from collections.abc import Iterable
from dataclasses import dataclass
from typing import Optional
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/mercurial.py
from __future__ import annotations

import logging

from pip._internal.utils.misc import HiddenText, display_path
"""Handles all VCS (version control) support"""

from __future__ import annotations

import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/__init__.py
from __future__ import annotations

import configparser
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/subversion.py
# Expose a limited set of classes and functions so callers outside of
# the vcs package don't need to import deeper than `pip._internal.vcs`.
# (The test directory may still need to import from a vcs sub-package.)
# Import all vcs modules to register each VCS in the VcsSupport object.
import pip._internal.vcs.bazaar
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/vcs/git.py
from __future__ import annotations

import logging
import os
import re
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/req_file.py
from __future__ import annotations

import logging
import os.path
import pathlib
from __future__ import annotations

import collections
import logging
from collections.abc import Generator
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/req_install.py
"""
Requirements file parsing
"""

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/pep723.py
from __future__ import annotations

import functools
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/req_uninstall.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/constructors.py
from __future__ import annotations

import functools
import os
import sys
import re
from typing import Any

from pip._internal.utils.compat import tomllib

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/req_set.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/req/req_dependency_group.py
"""Backing implementation for InstallRequirement's various constructors

The idea here is that these formed a major chunk of InstallRequirement's size
so, moving them and support code dedicated to them outside of that class
helps creates for better understandability for the rest of the code.
import logging
from collections import OrderedDict

from pip._vendor.packaging.utils import canonicalize_name

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/pyproject.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/distributions/wheel.py
from collections.abc import Iterable, Iterator
from typing import Any

from pip._vendor.packaging.dependency_groups import DependencyGroupResolver
from pip._vendor.packaging.errors import ExceptionGroup
from __future__ import annotations

import os
from collections import namedtuple
from typing import Any
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/distributions/sdist.py
from __future__ import annotations

from typing import TYPE_CHECKING

from pip._vendor.packaging.utils import canonicalize_name
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/distributions/installed.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/distributions/__init__.py
from __future__ import annotations

import logging
from collections.abc import Iterable
from contextlib import nullcontext
from __future__ import annotations

from typing import TYPE_CHECKING

from pip._internal.distributions.base import AbstractDistribution
from pip._internal.distributions.base import AbstractDistribution
from pip._internal.distributions.sdist import SourceDistribution
from pip._internal.distributions.wheel import WheelDistribution
from pip._internal.req.req_install import InstallRequirement

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/distributions/base.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/locations/_distutils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/locations/_sysconfig.py
from __future__ import annotations

import abc
from typing import TYPE_CHECKING

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/locations/__init__.py
from __future__ import annotations

import logging
import os
import sys
"""Locations where we look for configs, install stuff, etc"""

# The following comment should be removed at some point in the future.
# mypy: strict-optional=False

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/locations/base.py
from __future__ import annotations

import functools
import logging
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/index/sources.py
from __future__ import annotations

import functools
import os
import site
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/index/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/index/package_finder.py
"""Index interaction code"""
from __future__ import annotations

import logging
import mimetypes
import os
"""Routines related to PyPI, indexes"""

from __future__ import annotations

import datetime
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/index/collector.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/download.py
"""
The main purpose of this module is to expose LinkCollector.collect_sources().
"""

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/auth.py
from collections.abc import Generator
from typing import Literal, NoReturn, TypeAlias, cast
from urllib.parse import urlsplit

from pip._vendor import requests, urllib3
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/cache.py
"""Download files with progress indicators."""

from __future__ import annotations

import email.message
"""Network Authentication Helpers

Contains interface (MultiDomainBasicAuth) and associated glue code for
providing credentials in the context of network requests.
"""
"""HTTP cache implementation."""

from __future__ import annotations

import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/session.py
"""Contains purely network-related utilities."""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/lazy_wheel.py
"""PipSession and supporting code, containing all pip-specific
network request configuration and behavior.
"""

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_internal/network/xmlrpc.py
"""Lazy ZIP over HTTP"""

from __future__ import annotations

__all__ = ["HTTPRangeRequestUnsupported", "dist_from_wheel_url"]
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/__init__.py
"""xmlrpclib.Transport implementation"""

import logging
import urllib.parse
import xmlrpc.client
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/utils.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/cookies.py
from __future__ import annotations

__version__ = "26.2.1"


"""
requests.utils
~~~~~~~~~~~~~~

This module provides utility functions that are used within Requests
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/hooks.py
"""
requests.cookies
~~~~~~~~~~~~~~~~

Compatibility code to be able to use `http.cookiejar.CookieJar` with requests.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/auth.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/adapters.py
"""
requests.hooks
~~~~~~~~~~~~~~

This module provides the capabilities for the Requests hooks system.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/exceptions.py
"""
requests.auth
~~~~~~~~~~~~~

This module contains the authentication handlers for Requests.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/sessions.py
"""
requests.adapters
~~~~~~~~~~~~~~~~~

This module contains the transport adapters that Requests uses to define
"""
requests.exceptions
~~~~~~~~~~~~~~~~~~~

This module contains the set of Requests' exceptions.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/status_codes.py
"""
requests.sessions
~~~~~~~~~~~~~~~~~

This module provides a Session object to manage and persist settings across
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/compat.py
#   __
#  /__)  _  _     _   _ _/   _
# / (   (- (/ (/ (- _)  /  _)
#          /

r"""
The ``codes`` object defines a mapping from common names for HTTP statuses
to their numerical codes, accessible either as attributes or as dictionary
items.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/models.py
"""
requests.compat
~~~~~~~~~~~~~~~

This module previously handled import compatibility issues
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/_types.py
"""
requests.models
~~~~~~~~~~~~~~~

This module contains the primary objects that power Requests.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/structures.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/__version__.py
"""
requests._types
~~~~~~~~~~~~~~~

This module contains type aliases used internally by the Requests library.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/packages.py
"""
requests.structures
~~~~~~~~~~~~~~~~~~~

Data structures that power Requests.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/api.py
# .-. .-. .-. . . .-. .-. .-. .-.
# |(  |-  |.| | | |-  `-.  |  `-.
# ' ' `-' `-`.`-' `-' `-'  '  `-'

__title__ = "requests"
import sys

from .compat import chardet

# This code exists for backwards compatibility reasons.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/help.py
"""
requests.api
~~~~~~~~~~~~

This module implements the Requests API.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/certs.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/requests/_internal_utils.py
"""Module containing bug report helper(s)."""

# pyright: reportUnknownMemberType=false

import json
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/macos.py
#!/usr/bin/env python

"""
requests.certs
~~~~~~~~~~~~~~
"""
requests._internal_utils
~~~~~~~~~~~~~~

Provides utility functions that are consumed internally by Requests
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/unix.py
"""macOS."""

from __future__ import annotations

import os.path
"""Unix."""

from __future__ import annotations

import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/__main__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/android.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/_xdg.py
"""Main entry point."""

from __future__ import annotations

from pip._vendor.platformdirs import PlatformDirs, __version__
"""Android."""

from __future__ import annotations

import os
"""Utilities for determining application-specific dirs.

Provides convenience functions (e.g. :func:`user_data_dir`, :func:`user_config_path`), a :data:`PlatformDirs` class that
auto-detects the current platform, and the :class:`~platformdirs.api.PlatformDirsABC` base class.

"""XDG environment variable mixin for Unix and macOS."""

from __future__ import annotations

import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/api.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/version.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/platformdirs/windows.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pkg_resources/__init__.py
"""Base API."""

from __future__ import annotations

import os
# file generated by vcs-versioning
# don't change, don't track in version control
from __future__ import annotations

__all__ = [
"""Windows."""

from __future__ import annotations

import os
# TODO: Add Generic type annotations to initialized collections.
# For now we'd simply use implicit Any/Unknown which would add redundant annotations
# mypy: disable-error-code="var-annotated"
"""
Package resource API
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/caches/redis_cache.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/caches/file_cache.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/caches/__init__.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0

from pip._vendor.cachecontrol.caches.file_cache import FileCache, SeparateBodyFileCache
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/adapter.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/heuristics.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/cache.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/controller.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0

"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/__init__.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0

"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/filewrapper.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0

"""CacheControl import Interface.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/serialize.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/_cmd.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/cachecontrol/wrapper.py
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distlib/scripts.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distlib/util.py
# -*- coding: utf-8 -*-
#
# Copyright (C) 2013-2026 Vinay Sajip.
# Licensed to the Python Software Foundation under a contributor agreement.
# See LICENSE.txt and CONTRIBUTORS.txt.
# SPDX-FileCopyrightText: 2015 Eric Larson
#
# SPDX-License-Identifier: Apache-2.0
from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distlib/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distlib/compat.py
#
# Copyright (C) 2012-2026 The Python Software Foundation.
# See LICENSE.txt and CONTRIBUTORS.txt.
#
import codecs
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distlib/resources.py
# -*- coding: utf-8 -*-
#
# Copyright (C) 2012-2024 Vinay Sajip.
# Licensed to the Python Software Foundation under a contributor agreement.
# See LICENSE.txt and CONTRIBUTORS.txt.
# -*- coding: utf-8 -*-
#
# Copyright (C) 2013-2026 Vinay Sajip.
# Licensed to the Python Software Foundation under a contributor agreement.
# See LICENSE.txt and CONTRIBUTORS.txt.
# -*- coding: utf-8 -*-
#
# Copyright (C) 2013-2026 Vinay Sajip.
# Licensed to the Python Software Foundation under a contributor agreement.
# See LICENSE.txt and CONTRIBUTORS.txt.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli/_types.py
"""
pip._vendor is for vendoring dependencies of pip to prevent needing pip to
depend on something external.

Files inside of pip._vendor should be considered immutable and should only be
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli/_re.py
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2021 Taneli Hukkinen
# Licensed to PSF under a Contributor Agreement.

__all__ = ("loads", "load", "TOMLDecodeError")
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2021 Taneli Hukkinen
# Licensed to PSF under a Contributor Agreement.

from typing import Any, Callable, Tuple
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli/_parser.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli_w/__init__.py
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2021 Taneli Hukkinen
# Licensed to PSF under a Contributor Agreement.

from __future__ import annotations
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2021 Taneli Hukkinen
# Licensed to PSF under a Contributor Agreement.

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/tomli_w/_writer.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_musllinux.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/utils.py
__all__ = ("dumps", "dump")
__version__ = "1.2.0"  # DO NOT EDIT THIS LINE MANUALLY. LET bump2version UTILITY DO IT

from pip._vendor.tomli_w._writer import dump, dumps
from __future__ import annotations

from collections.abc import Mapping
from datetime import date, datetime, time
from types import MappingProxyType
"""PEP 656 support.

This module implements logic to detect if the currently running Python is
linked against musl, and what musl version is used.
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/dependency_groups.py
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.

from __future__ import annotations
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/tags.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/errors.py
from __future__ import annotations

import re
from collections.abc import Mapping, Sequence

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/requirements.py
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.

from __future__ import annotations
from __future__ import annotations

import contextlib
import dataclasses
import sys
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.
from __future__ import annotations

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_structures.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/direct_url.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/licenses/_spdx.py
from __future__ import annotations

import dataclasses
import re
import urllib.parse
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.

"""Backward-compatibility shim for unpickling Version objects serialized before
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/licenses/__init__.py

from __future__ import annotations

from typing import TypedDict

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_manylinux.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/specifiers.py
#######################################################################################
#
# Adapted from:
#  https://github.com/pypa/hatch/blob/5352e44/backend/src/hatchling/licenses/parse.py
#
from __future__ import annotations

import collections
import contextlib
import functools
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.

__title__ = "packaging"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/pylock.py
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.
"""
.. testsetup::
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_tokenizer.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_parser.py
from __future__ import annotations

import dataclasses
import logging
import re
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/_elffile.py
from __future__ import annotations

import contextlib
import re
from dataclasses import dataclass
"""Handwritten parser of dependency specifiers.

The docstring for each __parse_* function contains EBNF-inspired grammar representing
the implementation.
"""
"""
ELF file parser.

This provides a class ``ELFFile`` that parses an ELF executable in a similar
interface to ``ZipFile``. Only the read interface is implemented.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/markers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/metadata.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/packaging/version.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/certifi/__main__.py
from __future__ import annotations

import email.header
import email.message
import email.parser
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.

from __future__ import annotations
import argparse

from pip._vendor.certifi import contents, where

parser = argparse.ArgumentParser()
# This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.
"""
.. testsetup::
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/certifi/__init__.py
from .core import contents, where

__all__ = ["contents", "where"]
__version__ = "2026.06.17"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/certifi/core.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/codec.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/idnadata.py
"""
certifi.py
~~~~~~~~~~

This module returns the installation location of cacert.pem or its contents.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/__main__.py
import codecs
from typing import Any, Optional

from .core import IDNAError, _unicode_dots_re, alabel, decode, encode, ulabel

# This file is automatically generated by tools/idna-data

__version__ = "17.0.0"

scripts = {
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/__init__.py
import sys

from .cli import main

if __name__ == "__main__":
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/compat.py
from .core import (
    IDNABidiError,
    IDNAError,
    InvalidCodepoint,
    InvalidCodepointContext,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/intranges.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/cli.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/LICENSE.md
from typing import Any, Union

from .core import decode, encode


"""
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
"""Command-line interface for the :mod:`idna` package.

Invoked via ``python -m idna``. See :func:`main` for the entry point.
"""

BSD 3-Clause License

Copyright (c) 2013-2026, Kim Davies and contributors.
All rights reserved.

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/package_data.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/core.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/idna/uts46data.py
__version__ = "3.18"
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distro/distro.py
import bisect
import re
import unicodedata
import warnings
from typing import Optional, Union
# This file is automatically generated by tools/idna-data

from array import array
from typing import Optional

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distro/__main__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/distro/__init__.py
#!/usr/bin/env python
# Copyright 2015-2021 Nir Cohen
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
from .distro import main

if __name__ == "__main__":
    main()
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/msgpack/exceptions.py
from .distro import (
    NORMALIZED_DISTRO_ID,
    NORMALIZED_LSB_ID,
    NORMALIZED_OS_ID,
    LinuxDistribution,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/msgpack/fallback.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/msgpack/__init__.py
class UnpackException(Exception):
    """Base class for some exceptions raised while unpacking.

    NOTE: unpack may raise exception other than subclass of
    UnpackException.  If you want to catch all error, catch
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/msgpack/ext.py
"""Fallback pure Python implementation of msgpack"""

import struct
import sys
from datetime import datetime as _DateTime
# ruff: noqa: F401
import os

from .exceptions import *  # noqa: F403
from .ext import ExtType, Timestamp
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/style.py
import datetime
import struct
from collections import namedtuple


[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/modeline.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/util.py
"""
    pygments.style
    ~~~~~~~~~~~~~~

    Basic style object.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/formatters/_mapping.py
"""
    pygments.modeline
    ~~~~~~~~~~~~~~~~~

    A simple modeline parser (based on pymodeline).
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/formatters/__init__.py
"""
    pygments.util
    ~~~~~~~~~~~~~

    Utility functions.
# Automatically generated by scripts/gen_mapfiles.py.
# DO NOT EDIT BY HAND; run `tox -e mapfiles` instead.

FORMATTERS = {
    'BBCodeFormatter': ('pygments.formatters.bbcode', 'BBCode', ('bbcode', 'bb'), (), 'Format tokens with BBcodes. These formatting codes are used by many bulletin boards, so you can highlight your sourcecode with pygments before posting it there.'),
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/token.py
"""
    pygments.formatters
    ~~~~~~~~~~~~~~~~~~~

    Pygments formatters.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/__main__.py
"""
    pygments.token
    ~~~~~~~~~~~~~~

    Basic token types and the standard tokens.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/__init__.py
"""
    pygments.__main__
    ~~~~~~~~~~~~~~~~~

    Main entry point for ``python -m pygments``.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/filters/__init__.py
"""
    Pygments
    ~~~~~~~~

    Pygments is a syntax highlighting package written in Python.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/lexer.py
"""
    pygments.filters
    ~~~~~~~~~~~~~~~~

    Module containing filter lookup functions and default
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/sphinxext.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/unistring.py
"""
    pygments.lexer
    ~~~~~~~~~~~~~~

    Base lexer classes.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/styles/_mapping.py
"""
    pygments.sphinxext
    ~~~~~~~~~~~~~~~~~~

    Sphinx extension to generate automatic documentation of lexers,
"""
    pygments.unistring
    ~~~~~~~~~~~~~~~~~~

    Strings of all Unicode characters of a certain category.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/styles/__init__.py
# Automatically generated by scripts/gen_mapfiles.py.
# DO NOT EDIT BY HAND; run `tox -e mapfiles` instead.

STYLES = {
    'AbapStyle': ('pygments.styles.abap', 'abap', ()),
"""
    pygments.styles
    ~~~~~~~~~~~~~~~

    Contains built-in styles.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/plugin.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/formatter.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/scanner.py
"""
    pygments.plugin
    ~~~~~~~~~~~~~~~

    Pygments plugin interface.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/regexopt.py
"""
    pygments.formatter
    ~~~~~~~~~~~~~~~~~~

    Base formatter class.
"""
    pygments.scanner
    ~~~~~~~~~~~~~~~~

    This library implements a regex based scanner. Some languages
"""
    pygments.regexopt
    ~~~~~~~~~~~~~~~~~

    An algorithm that generates optimized regexes for matching long lists of
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/lexers/python.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/lexers/_mapping.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/lexers/__init__.py
"""
    pygments.lexers.python
    ~~~~~~~~~~~~~~~~~~~~~~

    Lexers for Python and related languages.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/filter.py
# Automatically generated by scripts/gen_mapfiles.py.
# DO NOT EDIT BY HAND; run `tox -e mapfiles` instead.

LEXERS = {
    'ABAPLexer': ('pip._vendor.pygments.lexers.business', 'ABAP', ('abap',), ('*.abap', '*.ABAP'), ('text/x-abap',)),
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pygments/console.py
"""
    pygments.lexers
    ~~~~~~~~~~~~~~~

    Pygments lexers.
"""
    pygments.filter
    ~~~~~~~~~~~~~~~

    Module that implements the default filter.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/bom.cdx.json
"""
    pygments.console
    ~~~~~~~~~~~~~~~~

    Format colored console output.
{
  "$schema": "http://cyclonedx.org/schema/bom-1.4.schema.json",
  "bomFormat": "CycloneDX",
  "components": [
    {
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pyproject_hooks/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pyproject_hooks/_impl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pyproject_hooks/_in_process/__init__.py
"""Wrappers to call pyproject.toml-based build backend hooks.
"""

from typing import TYPE_CHECKING

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py
import json
import os
import sys
import tempfile
from contextlib import contextmanager
"""This is a subpackage because the directory is on sys.path for _in_process.py

The subpackage should stay as empty as possible to avoid shadowing modules that
the backend might import.
"""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/_api.py
"""This is invoked in a subprocess to call the build backend hooks.

It expects:
- Command line args: hook_name, control_dir
- Environment variables:
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/_openssl.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/__init__.py
import contextlib
import os
import platform
import socket
import ssl
import contextlib
import os
import re
import ssl
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/_macos.py
"""Verify certificates using native system trust stores"""

import sys as _sys

if _sys.version_info < (3, 10):
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/_ssl_constants.py
import contextlib
import ctypes
import platform
import ssl
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/truststore/_windows.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/color_triplet.py
import ssl
import sys
import typing

# Hold on to the original class so we can create it consistently
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/style.py
import contextlib
import ssl
import typing
from ctypes import WinDLL  # type: ignore
from ctypes import WinError  # type: ignore
from typing import NamedTuple, Tuple


class ColorTriplet(NamedTuple):
    """The red, green, and blue components of a color."""
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/pretty.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/errors.py
import sys
from functools import lru_cache
from operator import attrgetter
from pickle import dumps, loads
from random import randint
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/live_render.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/layout.py
import builtins
import collections
import dataclasses
import inspect
import os
class ConsoleError(Exception):
    """An error in console operation."""


class StyleError(Exception):
from typing import Optional, Tuple, Literal


from ._loop import loop_last
from .console import Console, ConsoleOptions, RenderableType, RenderResult
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/screen.py
from abc import ABC, abstractmethod
from itertools import islice
from operator import itemgetter
from threading import RLock
from typing import (
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/spinner.py
from typing import Optional, TYPE_CHECKING

from .segment import Segment
from .style import StyleType
from ._loop import loop_last
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/logging.py
from typing import TYPE_CHECKING, List, Optional, Union, cast

from ._spinners import SPINNERS
from .measure import Measurement
from .table import Table
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/traceback.py
import logging
from datetime import datetime
from logging import Handler, LogRecord
from pathlib import Path
from types import ModuleType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/text.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/align.py
import inspect
import linecache
import os
import sys
from dataclasses import dataclass, field
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/table.py
import re
from functools import partial, reduce
from math import gcd
from operator import itemgetter
from typing import (
from itertools import chain
from typing import TYPE_CHECKING, Iterable, Optional, Literal

from .constrain import Constrain
from .jupyter import JupyterMixin
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/constrain.py
from dataclasses import dataclass, field, replace
from typing import (
    TYPE_CHECKING,
    Dict,
    Iterable,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/repr.py
from typing import Optional, TYPE_CHECKING

from .jupyter import JupyterMixin
from .measure import Measurement

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/panel.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/file_proxy.py
import inspect
from functools import partial
from typing import (
    Any,
    Callable,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/json.py
from typing import TYPE_CHECKING, Optional

from .align import AlignMethod
from .box import ROUNDED, Box
from .cells import cell_len
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/live.py
import io
from typing import IO, TYPE_CHECKING, Any, List

from .ansi import AnsiDecoder
from .text import Text
from pathlib import Path
from json import loads, dumps
from typing import Any, Callable, Optional, Union

from .text import Text
from __future__ import annotations

import sys
from threading import Event, RLock, Thread
from types import TracebackType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_cell_widths.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_loop.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/box.py
# Auto generated by make_terminal_widths.py

CELL_WIDTHS = [
    (0, 0, 0),
    (1, 31, -1),
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/emoji.py
from typing import Iterable, Tuple, TypeVar

T = TypeVar("T")


[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/__main__.py
from typing import TYPE_CHECKING, Iterable, List, Literal


from ._loop import loop_last

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/color.py
import sys
from typing import TYPE_CHECKING, Optional, Union, Literal

from .jupyter import JupyterMixin
from .segment import Segment
import colorsys
import io
from time import process_time

from pip._vendor.rich import box
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/styled.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/prompt.py
import re
import sys
from colorsys import rgb_to_hls
from enum import IntEnum
from functools import lru_cache
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_export_format.py
from typing import Any, Generic, List, Optional, TextIO, TypeVar, Union, overload

from . import get_console
from .console import Console
from .text import Text, TextType
from typing import TYPE_CHECKING

from .measure import Measurement
from .segment import Segment
from .style import StyleType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/__init__.py
CONSOLE_HTML_FORMAT = """\
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/highlighter.py
"""Rich text and beautiful formatting in the terminal."""

import os
from typing import IO, TYPE_CHECKING, Any, Callable, Optional, Union

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_palettes.py
import re
from abc import ABC, abstractmethod
from typing import List, Union

from .text import Span, Text
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_inspect.py
from .palette import Palette


# Taken from https://en.wikipedia.org/wiki/ANSI_escape_code (Windows 10 column)
WINDOWS_PALETTE = Palette(
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/segment.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/jupyter.py
import inspect
from inspect import cleandoc, getdoc, getfile, isclass, ismodule, signature
from typing import Any, Collection, Iterable, Optional, Tuple, Type, Union

from .console import Group, RenderableType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/containers.py
from enum import IntEnum
from functools import lru_cache
from itertools import filterfalse
from logging import getLogger
from operator import attrgetter
from typing import TYPE_CHECKING, Any, Dict, Iterable, List, Sequence

if TYPE_CHECKING:
    from pip._vendor.rich.console import ConsoleRenderable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_null_file.py
from itertools import zip_longest
from typing import (
    TYPE_CHECKING,
    Iterable,
    Iterator,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/default_styles.py
from types import TracebackType
from typing import IO, Iterable, Iterator, List, Optional, Type


class NullFile(IO[str]):
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_stack.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/tree.py
from typing import Dict

from .style import Style

DEFAULT_STYLES: Dict[str, Style] = {
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/cells.py
from typing import List, TypeVar

T = TypeVar("T")


from typing import Iterator, List, Optional, Tuple

from ._loop import loop_first, loop_last
from .console import Console, ConsoleOptions, RenderableType, RenderResult
from .jupyter import JupyterMixin
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/progress_bar.py
from __future__ import annotations

from functools import lru_cache
from typing import Callable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/markup.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/measure.py
import math
from functools import lru_cache
from time import monotonic
from typing import Iterable, List, Optional

import re
from ast import literal_eval
from operator import attrgetter
from typing import Callable, Iterable, List, Match, NamedTuple, Optional, Tuple, Union

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_emoji_codes.py
from operator import itemgetter
from typing import TYPE_CHECKING, Callable, NamedTuple, Optional, Sequence

from . import errors
from .protocol import is_renderable, rich_cast
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/syntax.py
EMOJI = {
    "1st_place_medal": "🥇",
    "2nd_place_medal": "🥈",
    "3rd_place_medal": "🥉",
    "ab_button_(blood_type)": "🆎",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/pager.py
from __future__ import annotations

import os.path
import re
import sys
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_spinners.py
from abc import ABC, abstractmethod
from typing import Any


class Pager(ABC):
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/progress.py
"""
Spinners are from:
* cli-spinners:
    MIT License
    Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/padding.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/diagnose.py
from __future__ import annotations

import io
import typing
import warnings
from typing import TYPE_CHECKING, List, Optional, Tuple, Union

if TYPE_CHECKING:
    from .console import (
        Console,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_emoji_replace.py
import os
import platform

from pip._vendor.rich import inspect
from pip._vendor.rich.console import Console, get_windows_console_features
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/region.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/filesize.py
from typing import Callable, Match, Optional
import re

from ._emoji_codes import EMOJI

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/rule.py
from typing import NamedTuple


class Region(NamedTuple):
    """Defines a rectangular region of the screen."""
"""Functions for reporting filesizes. Borrowed from https://github.com/PyFilesystem/pyfilesystem2

The functions declared in this module should cover the different
use cases needed to generate a string representation of a file size
using several different units. Since there are many standards regarding
from typing import Union

from .align import AlignMethod
from .cells import cell_len, set_cell_size
from .console import Console, ConsoleOptions, RenderResult
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/columns.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_win32_console.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_log_render.py
from collections import defaultdict
from itertools import chain
from operator import itemgetter
from typing import Dict, Iterable, List, Optional, Tuple

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_pick.py
"""Light wrapper around the Win32 Console API - this module should only be imported on Windows

The API that this module wraps is documented at https://docs.microsoft.com/en-us/windows/console/console-functions
"""

from datetime import datetime
from typing import Iterable, List, Optional, TYPE_CHECKING, Union, Callable


from .text import Text, TextType
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_timer.py
from typing import Optional


def pick_bool(*values: Optional[bool]) -> bool:
    """Pick the first non-none bool or return the last value.
"""
Timer context manager, only used in debug.

"""

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/terminal_theme.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_fileno.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_windows_renderer.py
from typing import List, Optional, Tuple

from .color_triplet import ColorTriplet
from .palette import Palette

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/abc.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_ratio.py
from typing import Iterable, Sequence, Tuple, cast

from pip._vendor.rich._win32_console import LegacyWindowsTerm, WindowsCoordinates
from pip._vendor.rich.segment import ControlCode, ControlType, Segment

from __future__ import annotations

from typing import IO, Callable


from abc import ABC


class RichRenderable(ABC):
    """An abstract base class for Rich renderables.
from fractions import Fraction
from math import ceil
from typing import cast, List, Optional, Sequence, Protocol


[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/theme.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_windows.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/themes.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/protocol.py
import configparser
from typing import IO, Dict, List, Mapping, Optional

from .default_styles import DEFAULT_STYLES
from .style import Style, StyleType
import sys
from dataclasses import dataclass


@dataclass
from .default_styles import DEFAULT_STYLES
from .theme import Theme


DEFAULT = Theme(DEFAULT_STYLES)
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/bar.py
from typing import Any, cast, Set, TYPE_CHECKING
from inspect import isclass

if TYPE_CHECKING:
    from pip._vendor.rich.console import RenderableType
from typing import Optional, Union

from .color import Color
from .console import Console, ConsoleOptions, RenderResult
from .jupyter import JupyterMixin
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_extension.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/scope.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/ansi.py
from typing import Any


def load_ipython_extension(ip: Any) -> None:  # pragma: no cover
    # prevent circular import
from collections.abc import Mapping
from typing import TYPE_CHECKING, Any, Optional, Tuple

from .highlighter import ReprHighlighter
from .panel import Panel
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/_wrap.py
import re
import sys
from contextlib import suppress
from typing import Iterable, NamedTuple, Optional

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/console.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/status.py
from __future__ import annotations

import re
from typing import Iterable

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/control.py
import inspect
import os
import sys
import threading
import zlib
from types import TracebackType
from typing import Optional, Type

from .console import Console, RenderableType
from .jupyter import JupyterMixin
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/rich/palette.py
import time
from typing import TYPE_CHECKING, Callable, Dict, Iterable, List, Union, Final

from .segment import ControlCode, ControlType, Segment

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/structs.py
from math import sqrt
from functools import lru_cache
from typing import Sequence, Tuple, TYPE_CHECKING

from .color_triplet import ColorTriplet
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/reporters.py
from __future__ import annotations

import itertools
from collections import namedtuple
from typing import (
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/resolvers/abstract.py
__all__ = [
    "AbstractProvider",
    "AbstractResolver",
    "BaseReporter",
    "InconsistentCandidate",
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/resolvers/exceptions.py
from __future__ import annotations

import collections
from typing import TYPE_CHECKING, Any, Generic, Iterable, NamedTuple

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/resolvers/__init__.py
from __future__ import annotations

from typing import TYPE_CHECKING, Collection, Generic

from ..structs import CT, RT, RequirementInformation
from __future__ import annotations

from typing import TYPE_CHECKING, Collection, Generic

from .structs import CT, KT, RT, RequirementInformation, State
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/resolvers/criterion.py
from ..structs import RequirementInformation
from .abstract import AbstractResolver, Result
from .criterion import Criterion
from .exceptions import (
    InconsistentCandidate,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/resolvers/resolution.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/resolvelib/providers.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/socks.py
from __future__ import annotations

from typing import Collection, Generic, Iterable, Iterator

from ..structs import CT, RT, RequirementInformation
from __future__ import annotations

import collections
import itertools
import operator
"""
This module contains provisional support for SOCKS proxies from within
urllib3. This module supports SOCKS4, SOCKS4A (an extension of SOCKS4), and
SOCKS5. To enable its functionality, either install PySocks or install this
module with the ``socks`` extra.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/pyopenssl.py
from __future__ import annotations

from typing import (
    TYPE_CHECKING,
    Generic,
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/emscripten/fetch.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/emscripten/request.py
"""
Module for using pyOpenSSL as a TLS backend. This module was relevant before
the standard library ``ssl`` module supported SNI, but now that we've dropped
support for Python 2.7 all relevant Python versions support SNI so
**this module is no longer recommended**.
"""
Support for streaming http requests in emscripten.

A few caveats -

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/emscripten/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/emscripten/response.py
from __future__ import annotations

from dataclasses import dataclass, field

from ..._base_connection import _TYPE_BODY
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/emscripten/connection.py
from __future__ import annotations

import pip._vendor.urllib3.connection as urllib3_connection

from ...connectionpool import HTTPConnectionPool, HTTPSConnectionPool
from __future__ import annotations

import json as _json
import logging
import typing
from __future__ import annotations

import os
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/contrib/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/exceptions.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/http2/__init__.py
from __future__ import annotations

import socket
import typing
import warnings
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/http2/connection.py
from __future__ import annotations

import logging
import re
import threading
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/__init__.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/response.py
"""
Python HTTP library with thread-safe connection pooling, file post support, user friendly, and more
"""

from __future__ import annotations
from __future__ import annotations

import collections
import io
import json as _json
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/http2/probe.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/fields.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/poolmanager.py
from __future__ import annotations

from importlib.metadata import version

__all__ = [
from __future__ import annotations

import email.utils
import mimetypes
import typing
from __future__ import annotations

import threading


from __future__ import annotations

import functools
import logging
import typing
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/request.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/ssltransport.py
from __future__ import annotations

import io
import sys
import typing
from __future__ import annotations

import io
import socket
import ssl
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/util.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/ssl_.py
from __future__ import annotations

import typing
from types import TracebackType

from __future__ import annotations

import hashlib
import hmac
import os
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/__init__.py
# For backwards compatibility, provide imports that used to be here.
from __future__ import annotations

from .connection import is_connection_dropped
from .request import SKIP_HEADER, SKIPPABLE_HEADERS, make_headers
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/response.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/url.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/wait.py
from __future__ import annotations

import http.client as httplib
from email.errors import MultipartInvariantViolationDefect, StartBoundaryNotFoundDefect

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/timeout.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/ssl_match_hostname.py
from __future__ import annotations

import time
import typing
from enum import Enum
from __future__ import annotations

import re
import typing

"""The match_hostname() function from Python 3.5, essential when using SSL."""

# Note: This file is under the PSF license as the code comes from the python
# stdlib.   http://docs.python.org/3/license.html
# It is modified to remove commonName support.
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/retry.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/proxy.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/util/connection.py
from __future__ import annotations

import email
import logging
import random
from __future__ import annotations

import typing

from .url import Url
from __future__ import annotations

import socket
import typing

[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/_request_methods.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/_version.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/connectionpool.py
from __future__ import annotations

import json as _json
import typing
from urllib.parse import urlencode
# file generated by vcs-versioning
# don't change, don't track in version control
from __future__ import annotations

__all__ = [
from __future__ import annotations

import errno
import logging
import queue
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/_base_connection.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/_collections.py
from __future__ import annotations

import typing

from .util.connection import _TYPE_SOCKET_OPTIONS
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/filepost.py
from __future__ import annotations

import typing
from collections import OrderedDict
from enum import Enum, auto
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/pip/_vendor/urllib3/connection.py
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/uvicorn-0.54.0.dist-info/licenses/LICENSE.md
from __future__ import annotations

import datetime
import http.client
import logging
[Digest] Processing: /home/Woken/ecosystem/venv/lib/python3.14/site-packages/starlette-1.7.0.dist-info/licenses/LICENSE.md
Copyright © 2018, [Encode OSS Ltd](https://www.encode.io/).
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
Copyright © 2017-present, [Encode OSS Ltd](https://www.encode.io/).
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
from __future__ import annotations

import binascii
import codecs
import os
[Digest] Processing: /home/Woken/ecosystem/knowledge_base/index.py
[Digest] Processing: /home/Woken/ecosystem/knowledge_base/logs/2026-10-01_12-56-54_orchestrator_run.md
from __future__ import annotations

import select
import socket
from functools import partial
[Digest] Processing: /home/Woken/ecosystem/knowledge_base/logs/2026-10-01_12-58-21_orchestrator_run.md
# Orchestrator Execution Log - 2026-10-01_12-56-54
```
[*] Initializing repository resolution...
[Resolver] Repository InfuseLink exists. Pulling latest state...
[Resolver] Executing: git pull origin main --allow-unrelated-histories
[Digest] Processing: /home/Woken/ecosystem/knowledge_base/logs/2026-10-01_12-56-20_orchestrator_run.md
# Orchestrator Execution Log - 2026-10-01_12-58-21
```
[*] Initializing repository resolution...
[Resolver] Repository InfuseLink exists. Pulling latest state...
[Resolver] Executing: git pull origin main --allow-unrelated-histories
[Digest] Processing: /home/Woken/ecosystem/knowledge_base/logs/2026-10-01_12-27-27_ecosystem_boot.md
# Orchestrator Execution Log - 2026-10-01_12-56-20
```
[*] Initializing repository resolution...
[Resolver] Repository InfuseLink exists. Pulling latest state...
[Resolver] Executing: git pull origin main --allow-unrelated-histories
# Ecosystem Boot
*Timestamp: 2026-10-01_12-27-27*

Unified system spine initialized successfully.
import os
from datetime import datetime

KB_DIR = os.path.expanduser("~/ecosystem/knowledge_base/logs")

