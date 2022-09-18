<template>
  <v-list v-bind="$attrs">
    <div :key="index" v-for="(notification, index) in notifications">
      <NotificationRecord
        :header="notification.header"
        :description="notification.description"
      ></NotificationRecord>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script lang="ts">
import NotificationModel from "@/models/NotificationModel";
import { Vue, Component } from "vue-property-decorator";
import NotificationRecord from "./NotificationRecord.vue";

@Component({
  components: {
    NotificationRecord,
  },
})
export default class NotificationsList extends Vue {
  notifications: NotificationModel[] = [];

  constructor() {
    super();
    this.notifications = [
      new NotificationModel("Order #23 Approved!"),
      new NotificationModel(
        "Subscription is cancelled",
        "Your subscription is expired!"
      ),
    ];
  }
}
</script>
