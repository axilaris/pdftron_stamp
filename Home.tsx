import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';

type Props = CompositeScreenProps<
  any,
  any
>;

const Home: React.FC<Props> = ({route, navigation}) => {
  const [signatureUrl, setSignatureUrl] = useState('');
  const [rubberStampUrl, setRubberStampUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [defaultFontSize, setDefaultFontSize] = useState('16');

  const handleSignatureUrlChange = (text: string) => {
    setSignatureUrl(text);
  };

  const handleRubberStampUrlChange = (text: string) => {
    setRubberStampUrl(text);
  };

  const handlePdfUrlChange = (text: string) => {
    setPdfUrl(text);
  };

  const handleDefaultFontSizeChange = (text: string) => {
    setDefaultFontSize(text);
  };

  const handleLogInputs = () => {
    console.log('Signature URL:', signatureUrl);
    console.log('Rubber Stamp URL:', rubberStampUrl);
    console.log('PDF URL:', pdfUrl);
    console.log('Default Font Size:', defaultFontSize);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add URL for Signature:</Text>
        <TextInput
          style={styles.input}
          placeholder="Signature URL"
          onChangeText={handleSignatureUrlChange}
          value={signatureUrl}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Add URL for Rubber Stamp:</Text>
        <TextInput
          style={styles.input}
          placeholder="Rubber Stamp URL"
          onChangeText={handleRubberStampUrlChange}
          value={rubberStampUrl}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Set URL for PDF:</Text>
        <TextInput
          style={styles.input}
          placeholder="PDF URL"
          onChangeText={handlePdfUrlChange}
          value={pdfUrl}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Default Font Size:</Text>
        <TextInput
          style={styles.input}
          placeholder="Default Font Size"
          onChangeText={handleDefaultFontSizeChange}
          value={defaultFontSize}
        />
      </View>
      <Button title="Launch PDFTron" onPress={handleLogInputs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Home;
