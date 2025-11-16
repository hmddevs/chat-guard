# Data Model

Chat Guard persists per‑server configuration and enforcement state in MongoDB using Mongoose.

## Collection: `ChatGuard`

```js
{
  _id: ObjectId,
  ServerID: String,                 // Discord guild ID
  MuteDurationMinute: Number,       // Default: 60
  PunishLogChannelID: String,       // Channel ID for moderation logs
  FiltredWords: [String],           // Server‑specific filtered terms
  WhiteListMembers: [String],       // User IDs exempt from enforcement
  WhiteListRoles: [String],         // Role IDs exempt from enforcement
  WhiteListChannels: [String],      // Channel IDs exempt from enforcement
  BlueListMembers: [String],        // Users warned in last 2 hours
  BlackListMembers: [String],       // Users currently muted
  CharacterLimit: Boolean,          // 500 char threshold
  InviteGuard: Boolean,             // Invite protection toggle
  LinkGuard: Boolean,               // Link protection toggle
  MassPingGuard: Boolean,           // Mass‑mention protection toggle
  BadWordGuard: Boolean,            // Profanity filter toggle
  SpamGuard: Boolean                // Spam detection toggle
}
```

## Access Patterns

- Read on message events to evaluate policy.
- Update on command invocations (e.g., toggles, list changes).
- Append/remove from BlueList/BlackList during enforcement.

## Retention & Cleanup

- BlueList entries expire after 2 hours (handled by timeouts in process memory).
- BlackList entries removed after timeout duration elapses.
- Consider periodic reconciliation if the process restarts during an enforcement window.

## Indexing (Optional)

For large deployments, consider indexes on `{ ServerID: 1 }`.
