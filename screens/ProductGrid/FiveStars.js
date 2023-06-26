import Icon from 'react-native-vector-icons/FontAwesome5';
import { images, colors, icons, fontSizes } from '../../constants';
import { View } from 'react-native';


function FiveStars(props) {

    const { numberOfStars } = props
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }}>
        <Icon name='star'
            style={{
                marginEnd: 2,
            }}
            size={25} color={'black'} />
    </View>



}
export default FiveStars