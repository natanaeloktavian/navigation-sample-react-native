import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#ff0000',
  },
  hamburgerIcon: {
    width: 24,
    height: 24,
    marginLeft:12
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  propertyIcon: {
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderWidth: 1,
    borderRadius: 32
  },
  listContainer: {
    paddingTop: 8
  },
  propertyListText: {
    marginTop: 8,
  },
  propertyDetailContainer: {
    flex: 1
  },
  line: {
    height: 1,
    backgroundColor:'#bcbcbc',
    marginTop: 8
  },
  propertyImageContainer: {
    width:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  propertyListContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

export default styles;
