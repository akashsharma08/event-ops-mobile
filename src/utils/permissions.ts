import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
import { Platform } from 'react-native';

const CAMERA_PERMISSION = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
const GALLERY_PERMISSION = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
export const requestCameraPermission = async () => {
  const status = await check(CAMERA_PERMISSION);

  switch (status) {
    case RESULTS.GRANTED:
      return true;

    case RESULTS.DENIED: {
      const result = await request(GALLERY_PERMISSION);
      return result === RESULTS.GRANTED;
    }
    case RESULTS.BLOCKED:
      openSettings();
      return false;

    default:
      return false;
  }
};
export const requestGalleryPermission = async () => {
  const status = await check(GALLERY_PERMISSION);

  switch (status) {
    case RESULTS.GRANTED:
      return true;

    case RESULTS.DENIED: {
      const result = await request(GALLERY_PERMISSION);
      return result === RESULTS.GRANTED;
    }
    case RESULTS.BLOCKED:
      openSettings();
      return false;

    default:
      return false;
  }
};
