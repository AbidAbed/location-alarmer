function AlarmsPage() {
  return (
    <View>
      <FlatList
        data={alarms}
        renderItem={({item: alarm}) => <View>{alarm}</View>}></FlatList>
      <Button title="Add location"></Button>
    </View>
  );
}
export default AlarmsPage;
