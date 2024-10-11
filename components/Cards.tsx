import { FlatList, Text, View, ListRenderItem } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { CardType } from '@/types';
import { ChipIcon } from '@/constants/Icons';

const Transactions = ({ cardList }: { cardList: CardType[] }) => {
  const maskCardNumber = (cardNumber: string) => {
    // Replace all but the last 4 digits with asterisks
    const visibleDigits = cardNumber.slice(-4);
    const maskedDigits = cardNumber.slice(0, -4).replace(/\d/g, '*');
    return `${maskedDigits}${visibleDigits}`;
  }

  const renderItem: ListRenderItem<CardType> = ({ item }) => {
    let balance = item.balance.split('.');

    return (
      <View style={{backgroundColor: item.name === 'Visa' ? Colors.visacard : item.name === 'Master Card' ? Colors.mastercard : Colors.americanexpress, borderRadius: 20, paddingTop: 20, marginRight: 15, width: 230, gap: 10}}>
        <Text style={{backgroundColor: '#000'}}>strip</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 10}}>
          <View style={{gap: 10}}>
            <Text style={{color: Colors.white, fontSize: 16, fontWeight: '700'}}>{item.name}</Text>
            <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>{maskCardNumber(item.creditCardNumber)}</Text>
            <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>Ksh. {balance[0]}.<Text style={{fontSize: 12, fontWeight: '400'}}>{balance[1]}</Text></Text>
          </View>
          <ChipIcon width={22} height={22} />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.black, paddingHorizontal: 20}}>
      <Text style={{color: Colors.white, fontSize: 16, marginBottom: 20}}>My <Text style={{fontWeight: '700'}}>Cards</Text></Text>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default Transactions;
