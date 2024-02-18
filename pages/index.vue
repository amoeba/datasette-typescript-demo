<script setup lang="ts">
import { knex } from "knex";

import type { legislatorsEntity } from '~/Database';

const query = knex<legislatorsEntity>("executives")
  .where('name')
  .first()
</script>

<template>
  TODO
</template>
