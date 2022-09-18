<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>
                {{ header }}
            </v-list-item-title>
            <v-list-item-subtitle>
                {{ description }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NotificationRecord extends Vue {
    @Prop(String)
    readonly header!: string;

    @Prop(String)
    readonly description!: string;
}
</script>