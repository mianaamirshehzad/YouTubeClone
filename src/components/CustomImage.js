import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default CustomImage = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress} >
            <Image
                source={props.source}
                style={styles.img} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
        margin: 7,
    },
})