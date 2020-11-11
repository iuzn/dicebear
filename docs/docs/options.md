---
title: Options
slug: /docs/options
---

The following options are available for each avatar style.

| name       | alias | type   | default                      | description                                                                                                                                         |
| ---------- | ----- | ------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius     | r     | number | `0`                          | Avatar border radius                                                                                                                                |
| base64     |       | bool   | `false`                      | Return avatar as base64 data uri instead of XML <br /> **Not supported by the HTTP API**                                                            |
| width      | w     | number | `null`                       | Fixed width                                                                                                                                         |
| height     | h     | number | `null`                       | Fixed height                                                                                                                                        |
| margin     | m     | number | `0`                          | Avatar margin in percent<br /> **HTTP-API limitation** Max value `25`                                                                               |
| background | b     | string | `null`                       | Any valid color identifier<br /> **HTTP-API limitation** Only hex _(3-digit, 6-digit and 8-digit)_ values are allowed. Use url encoded hash: `%23`. |
| userAgent  |       | string | `window.navigator.userAgent` | User-Agent for legacy browser fallback<br /> **Automatically detected by the HTTP API**                                                             |

The avatar styles may offer additional options. You can find them in the avatar style [documentation](/styles).