import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../assests/images';
import List from './component/List';
import Header from './component/Header';

const user = {
  name: 'Jina Simons',
  img: '',
  points: 6000,
  desc: 'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!',
};

const DATA = [
  {
    id: '1',
    title: 'First Stripe Earned',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    id: '2',
    title: 'Born Winner',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    id: '3',
    title: 'Trader of the Month',
    desc: 'Won 7 under-over games in a row',
  },
  {
    id: '4',
    title: 'Rising Star',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    id: '5',
    title: 'Jackpot',
    desc: 'Top 10% of highest spending players in a month',
  },
  {
    id: '6',
    title: 'Impossible',
    desc: 'Top 10% of highest spending players in a month',
  },
];

type ItemProps = {
  title: String;
  desc: String;
};

const Item = ({title, desc}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Image source={Images.badgeIcon} />
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDesc}>{desc}</Text>
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollView style={styles.profileContainer}>
      {/* Header  */}
      <Header />
      <View style={styles.profileInfo}>
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
          />
          <View style={styles.editIcon}>
            <Image source={Images.editIcon} />
          </View>
        </View>
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profilePoint}>{user.points} Pts</Text>
        <Text style={styles.profileDesc}>{user.desc}</Text>
      </View>
      <View style={styles.logoutContainer}>
        <Image source={Images.logoutIcon} />
        <Text style={{fontSize: 16}}>Logout</Text>
      </View>
      <View style={styles.statusContainer}>
        <Image
          source={require('../../assests/icons/profile_prorgess.png')}
          style={{
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 1,
            margin: 15,
          }}
        />
        <View style={styles.status}>
          <View style={styles.statusItem}>
            <Text style={styles.statusTitle}>Under or Over</Text>
            <View style={styles.statusInfo}>
              <Image source={Images.upIcon} />
              <Text style={styles.percentage}>81%</Text>
            </View>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusTitle}>Top 5</Text>
            <View style={styles.statusInfo}>
              <Image source={Images.downIcon} />
              <Text style={styles.percentage}>-51%</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.header}>
        <Pressable
          style={[styles.headerItem, !isOpen && styles.activeItem]}
          onPress={() => setIsOpen(false)}>
          <Text style={[styles.title, !isOpen && styles.active]}>
            Games Played
          </Text>
        </Pressable>
        <Pressable
          style={[styles.headerItem, isOpen && styles.activeItem]}
          onPress={() => setIsOpen(true)}>
          <Text style={[styles.title, isOpen && styles.active]}>Badges</Text>
        </Pressable>
      </View>
      {isOpen &&
        DATA.map(item => {
          return (
            <View style={styles.itemContainer}>
              <Item title={item.title} desc={item.desc} />
            </View>
          );
        })}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {},

  // title: {
  //   fontSize: 20,
  // },
  profileInfo: {
    gap: 6,
    backgroundColor: 'white',
  },
  profileImgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 60,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  profileName: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  profilePoint: {
    fontSize: 14,
    textAlign: 'center',
  },
  profileDesc: {
    fontSize: 16,
    letterSpacing: 1,
    paddingHorizontal: 18,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: 'white',
  },
  //   status
  statusContainer: {
    paddingHorizontal: 18,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  status: {
    flexDirection: 'row',
    borderColor: 'lightgray',
    padding: 15,
    gap: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  statusItem: {
    flex: 1,
    gap: 6,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  percentage: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 18,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    gap: 18,
  },
  itemTitle: {
    fontSize: 20,
    color: 'black',
  },
  itemDesc: {
    fontSize: 16,
    width: '60%',
  },
  header: {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerItem: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  activeItem: {
    borderBottomWidth: 2,
    borderColor: 'purple',
  },
  active: {
    color: 'purple',
    fontWeight: 'bold',
  },
});
