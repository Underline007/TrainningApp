import React, { useEffect, useState } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    ScrollView,
    FlatList,
    Alert,
    Switch,
    StyleSheet,
} from 'react-native';
import { images, colors, icons, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { UIHeader } from '../components';

function Settings(props) {
    const [isEnabledLockApp, setEnabledLockApp] = useState(true)
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(true)
    const [isUsedFingerprint, setUsedFingerprint] = useState(false)

    return <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
        <UIHeader title={"Settings"} />
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center'

            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10
                }}>Common</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='globe'
                    style={{
                        marginStart: 10,
                    }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Language</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>EngLish</Text>
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='cloud'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Environment</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>Production</Text>
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center'

            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10
                }}>Account</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='phone'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Phone Number</Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='envelope'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Email</Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='sign-out-alt'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Sign out</Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center'

            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10
                }}>Security</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='lock'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Lock app in background</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    style={{
                        marginEnd: 10,
                    }}
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='fingerprint'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Use Fingerprint</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    style={{
                        marginEnd: 10,
                    }}
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isUsedFingerprint ? colors.primary : colors.inactive}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setUsedFingerprint(!isUsedFingerprint)
                    }}
                    value={isUsedFingerprint}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='key'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Change Password</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    style={{
                        marginEnd: 10,
                    }}
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center'

            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10
                }}>Misc</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='passport'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Term of Service</Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center'
            }}>
                <Icon name='sourcetree'
                    style={{
                        marginStart: 10,
                    }}
                    size={16}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10
                }}>Open source licenses</Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right'
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,

                    }}
                    size={20}
                    color={'black'} />
            </View>
        </ScrollView>
    </View>
}

export default Settings