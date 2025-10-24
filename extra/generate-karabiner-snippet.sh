#!/bin/bash
jq '{profiles: [{complex_modifications: {rules: [.profiles[0].complex_modifications.rules[] | select(.description | contains("🕊️"))]}}]}' \
~/.config/karabiner/karabiner.json \
> extra/karabiner_serenity.json