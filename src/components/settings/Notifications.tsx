/*import { Flex, Text, Switch } from "@radix-ui/themes"

export default function NotificationSettings() {
  return (
    <Flex direction="column" gap="4">
      <Text size="5" weight="bold">Notification Preferences</Text>

      <Flex direction="column" gap="4">
        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Email Notifications</Text>
            <Text size="2" color="gray">Receive email updates about your account</Text>
          </Flex>
          <Switch
            checked={userProfile.notifications.email}
            onCheckedChange={(checked) => setUserProfile(prev => ({
              ...prev,
              notifications: {
                ...prev.notifications,
                email: checked
              }
            }))}
          />
        </Flex>

        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Push Notifications</Text>
            <Text size="2" color="gray">Receive push notifications on your devices</Text>
          </Flex>
          <Switch
            checked={userProfile.notifications.push}
            onCheckedChange={(checked) => setUserProfile(prev => ({
              ...prev,
              notifications: {
                ...prev.notifications,
                push: checked
              }
            }))}
          />
        </Flex>

        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Newsletter</Text>
            <Text size="2" color="gray">Receive our newsletter with updates and tips</Text>
          </Flex>
          <Switch
            checked={userProfile.notifications.newsletter}
            onCheckedChange={(checked) => setUserProfile(prev => ({
              ...prev,
              notifications: {
                ...prev.notifications,
                newsletter: checked
              }
            }))}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}*/
