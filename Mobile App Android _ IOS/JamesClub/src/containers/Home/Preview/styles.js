import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrix} from '../../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  GlobalPadding: {
    marginHorizontal: Metrix.HorizontalSize(20),
    paddingVertical: Metrix.VerticalSize(10),
  },
  PreviewBackground: {
    width: '100%',
    height: Metrix.VerticalSize(575),
    // resizeMode: 'contain',
  },
  PreviewBackgroundDesc: {
    flex: 3,
    height: Metrix.VerticalSize(250),
    marginHorizontal: Metrix.HorizontalSize(10),
    marginTop: -160,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  VacineStatus: {
    width: '100%',
    // backgroundColor:Colors.Primary,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    height: Metrix.VerticalSize(80),
    borderRadius: 6,
    // opacity:.8
  },
  VacineStatusLeftContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  VacineStatusLeftContainerIcon: {
    backgroundColor: Colors.Primary,
    width: 30,
    height: 30,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  VacineStatusLeftContainerIconWrapper: {
    resizeMode: 'contain',
  },
  VacineStatusLeftContainerText: {
    marginLeft: Metrix.HorizontalSize(15),
  },
  VacineStatusRightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  VacineStatusRightContainerWrapper: {
    backgroundColor: '#A2E9E9',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  // user details card
  userDetails: {
    backgroundColor: Colors.White,
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    width: '100%',
    flexDirection: 'row',
    borderRadius: 6,
    shadowColor: '#000',
    // padding: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  status: {
    backgroundColor: '#14B82F',
    height: 10,
    width: 10,
    borderRadius: 100,
  },
  userDetailsCenterContainer: {
    marginTop: 34,
  },
  statusNewMember: {
    backgroundColor: Colors.Primary,
    height: 10,
    width: 10,
    borderRadius: 100,
  },
  rowData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: Metrix.VerticalSize(7),
  },
  datingStar: {
    backgroundColor: Colors.Primary,
    // width: Metrix.HorizontalSize(70),
    // height: Metrix.VerticalSize(25),
    padding: 5,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginRight: -11,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  datingStarTitle: {
    fontWeight: 'bold',
    color: Colors.White,
    fontSize: 15,
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  ratingText: {
    fontSize: 25,
    color: Colors.Black,
  },
  messageVideoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrix.HorizontalSize(10),
  },
  messageVideoButtonMessage: {
    backgroundColor: Colors.Primary,
    width: '47%',
    height: Metrix.VerticalSize(57),
    borderRadius: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageVideoButtonVideoCall: {
    backgroundColor: '#A5A5A5',
    width: '47%',
    height: Metrix.VerticalSize(57),
    borderRadius: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageVideoButtonMessageText: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.White,
  },
  lookingForButtonWrapper: {
    width: Metrix.HorizontalSize(100),
    marginHorizontal: Metrix.HorizontalSize(5),
    marginVertical: Metrix.VerticalSize(10),
    backgroundColor: '#CBCBCB',
    height: Metrix.VerticalSize(50),
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lookingForButtonWrapperText: {
    color: Colors.White,
    fontWeight: '700',
    fontSize: 12,
    paddingHorizontal:1
  },
  favourite: {
    marginHorizontal: Metrix.HorizontalSize(10),
    marginVertical: Metrix.VerticalSize(10),
    borderRadius: 6,
  },
  addPic: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBCBCB',
    width: 100,
    height: 100,
    borderRadius: 9,
  },
  showHiddenPhotos: {
    width: '80%',
    height: Metrix.VerticalSize(50),
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
  },

  // modal
  centeredView: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    display: 'flex',
    paddingHorizontal: Metrix.HorizontalSize(30),
    justifyContent: 'center',
    backgroundColor: Colors.White,
    width: Metrix.HorizontalSize(310),
    height: Metrix.VerticalSize(390),
    alignItems: 'center',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: Colors.Gray,
    width: Metrix.HorizontalSize(259),
    marginVertical: Metrix.VerticalSize(20),
  },
  ratingTextArea: {
    fontSize: 16,
    paddingHorizontal: Metrix.HorizontalSize(20),
    height: 140,
    textAlignVertical: 'top',
    borderRadius: 7,
  },
  addRating: {
    alignSelf: 'flex-start',
    height: 60,
    width: Metrix.HorizontalSize(259),
    marginVertical: Metrix.VerticalSize(30),
  },
  // mapContaienr: {
  //     height: 400,
  //     width: 400,
  //     justifyContent: 'flex-end',
  //     alignItems: 'center',
  // },
  // map: {
  //     ...StyleSheet.absoluteFillObject,
  // },
});

export default styles;
