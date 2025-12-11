import { RuleConfigSeverity } from '@commitlint/types';
import type { CommitlintUserConfig } from 'cz-git';

const Configuration: CommitlintUserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'chore', 'revert', 'bump'],
    ],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: 'Denote the SCOPE of this change (optional):',
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
      customFooterPrefix: 'Input ISSUES prefix:',
      footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    types: [
      {
        value: 'build',
        name: '🛠️ build:     Changes that affect the build system or external dependencies',
        emoji: '🛠️',
      },
      {
        value: 'ci',
        name: '⚙️ ci:        Changes to our CI configuration files and scripts',
        emoji: '⚙️',
      },
      {
        value: 'docs',
        name: '📚 docs:      Documentation only changes',
        emoji: '📚',
      },
      {
        value: 'feat',
        name: '✨ feat:      A new feature',
        emoji: '✨',
      },
      {
        value: 'fix',
        name: '🐛 fix:       A bug fix',
        emoji: '🐛',
      },
      {
        value: 'perf',
        name: '🚀 perf:      A code change that improves performance',
        emoji: '🚀',
      },
      {
        value: 'refactor',
        name: '🔧 refactor:  A code change that neither fixes a bug nor adds a feature',
        emoji: '🔧',
      },
      {
        value: 'style',
        name: '🎨 style:     Changes that do not affect the meaning of the code',
        emoji: '🎨',
      },
      {
        value: 'test',
        name: '✅ test:      Adding missing tests or correcting existing tests',
        emoji: '✅',
      },
      {
        value: 'chore',
        name: "♻️ chore:     Other changes that don't modify src or test files",
        emoji: '♻️',
      },
      {
        value: 'revert',
        name: '⏪ revert:    Reverts a previous commit',
        emoji: '⏪',
      },
      {
        value: 'bump',
        name: '⬆️ bump:      Bump version',
        emoji: '⬆️',
      },
    ],
    useEmoji: true,
    themeColorCode: '38;5;055',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: true,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
    format: '{type}{scope}: {emoji} {subject}',
  },
};

export default Configuration;
