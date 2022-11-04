import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_dev_nllFDdKDXnXXkhti1mMd4l7UBPxhHpEkb0PzZFm33GQ5dxgBNZ9aAudxGVxOOaq5",
});

export const {
  suspense: { RoomProvider, useOthers, useUpdateMyPresence },
} = createRoomContext(client);
