import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TitleText: {
    fontWeight: '600',
    color: '#333333',
    margin: 17,
    fontSize: 16,
  },
  subContainer: {
    marginHorizontal: 17,
    borderRadius: 10,
    borderWidth: 0.1,
    // borderRadius: 10,
  },
  containerAlignment: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonUnder: {
    backgroundColor: '#452C55',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    borderRadius: 45,
    width: 147.5,
    height: 40,
    justifyContent: 'center',
  },
  buttonOver: {
    backgroundColor: '#6231AD',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    borderRadius: 45,
    width: 147.5,
    height: 40,
    justifyContent: 'center',
  },
  SubmitButton: {
    backgroundColor: '#6231AD',
    height: 40,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  alignmentsTextWithIcon: {
    padding: 15,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  progressLine: {
    backgroundColor: '#2DABAD',
    height: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  progress: {
    backgroundColor: '#FE4190',
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '75%',
  },
  textMid: {
    color: '#D2BAF5',
    fontSize: 15,
  },
  textLight: {
    color: '#B296DC',
    fontSize: 15,
  },
  textExtraLight: {
    color: '#B5C0C8',
  },
  textGrey: {
    color: '#727682',
    fontSize: 14,
    fontWeight: '600',
  },
});
