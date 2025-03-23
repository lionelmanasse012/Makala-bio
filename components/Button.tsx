import { View, Pressable, Text } from 'react-native';

type Props = {
    label: string;
    labelStyle?: string;
    className: string;
    // onPress: () => void;
};

export default function Button({ label, className, labelStyle }: Props) {
    return (
        <View>
            <Pressable className={className}>
                <Text className={`${labelStyle} text-sm font-medium`}>{label}</Text>
            </Pressable>
        </View>
    );
}
