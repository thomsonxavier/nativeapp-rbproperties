// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: Record<string, string> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'building.2.fill': 'apartment',
  'building.columns.fill': 'business',
  'map.fill': 'map',
  'building.2.crop.circle.fill': 'domain',
  'magnifyingglass': 'search',
  'slider.horizontal.3': 'tune',
  'arrow.up.arrow.down': 'sort',
  'bed.double.fill': 'bed',
  'shower.fill': 'shower',
  'square.fill': 'square-foot',
  'location.fill': 'location-on',
  'heart': 'favorite-border',
  'heart.fill': 'favorite',
  'chevron.left': 'chevron-left',
  'phone.fill': 'phone',
  'envelope.fill': 'email',
  'checkmark.circle.fill': 'check-circle',
  'star.fill': 'star',
  'exclamationmark.triangle': 'warning',
  'cross.fill': 'close',
  'graduationcap.fill': 'school',
  'cross.circle.fill': 'local-hospital',
  'cart.fill': 'shopping-cart',
  'bus.fill': 'directions-bus',
  'tram.fill': 'tram',
  'airplane': 'flight',
  'drop.fill': 'water-drop',
  'figure.child': 'child-care',
  'house.lodge.fill': 'house',
  'house.lodge': 'house',
  'sportscourt.fill': 'sports-soccer',
  'indianrupeesign.circle.fill': 'currency-rupee',
  'creditcard.fill': 'credit-card',
  'banknote.fill': 'money',
  'wrench.and.screwdriver.fill': 'build',
  'doc.fill': 'description',
  'certificate.fill': 'verified',
  'doc.text.fill': 'article',
  'receipt.fill': 'receipt',
  'mappin.circle.fill': 'location-on',
  'location.north.fill': 'navigation',
  'location.circle.fill': 'my-location',
  'ruler.fill': 'straighten',
  'clock.badge.checkmark': 'schedule',
  'calendar.badge.plus': 'event',
  'bell.fill': 'notifications',
  'bell.slash.fill': 'notifications-off',
  'exclamationmark.triangle.fill': 'warning',
  'info.circle.fill': 'info',
  'person.fill': 'person',
  'rectangle.portrait.and.arrow.right': 'logout',
  'person.badge.plus': 'person-add',
  'key.fill': 'vpn-key',
  'lock.rotation': 'lock-reset',
  'plus.circle.fill': 'add-circle',
  'pencil.circle.fill': 'edit',
  'trash.circle.fill': 'delete',
  'eye.fill': 'visibility',
  'square.and.pencil': 'edit',
  'camera.fill': 'camera-alt',
  'photo.fill': 'photo',
  'video.fill': 'videocam',
  'photo.on.rectangle': 'photo-library',
  'arrow.up.left.and.arrow.down.right': 'fullscreen',
  'wallet.pass.fill': 'account-balance-wallet',
  'qrcode': 'qr-code',
  'creditcard': 'credit-card',
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const materialIconName = MAPPING[name] as ComponentProps<typeof MaterialIcons>['name'];
  return <MaterialIcons color={color} size={size} name={materialIconName} style={style} />;
}
