<script setup>
import {ref, computed} from 'vue'
import {BASE_RULES} from "@/domain/password/rules-config";
import {StrengthOption, StrengthOptionLabel} from "@/domain/password/strength-options";

const password = ref('');

const isPassed = (rule) => rule.test(password.value)

const isStrongPassword = computed(() => {
  const passedRulesLength = BASE_RULES.filter((rule) => isPassed(rule.condition)).length;
  return passedRulesLength >= 5 ? StrengthOptionLabel[StrengthOption.Strong] : StrengthOptionLabel[StrengthOption.Weak]
});

</script>

<template>
  <div>
    <input data-test="password-field" v-model="password" type="password"/>
    <ul>
      <li
          v-for="rule in BASE_RULES"
          :key="rule"
          :data-test-rule-indicator="rule.name"
          class="password-hint__rule"
          :class="{'password-hint__rule--pass': isPassed(rule.condition),
                  'password-hint__rule--fail': !isPassed(rule.condition)
          }"
      >
        {{ rule.name }}
      </li>
    </ul>

    <span data-test="validation-summary">{{ isStrongPassword }}</span>
  </div>
</template>

<style lang="scss">
.password-hint__rule {
  &--pass {
    text-decoration: line-through;
  }
}

</style>
