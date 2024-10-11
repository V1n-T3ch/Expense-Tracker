import { ListRenderItem, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ExpenseType } from '@/types'
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';

const ExpenseBlock = ({expenseList} : {expenseList : ExpenseType[]}) => {
    const renderItem:ListRenderItem<Partial<ExpenseType>> = ({item, index}) => {
      if (index == 0) {
        return (
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.addItem}>
              <Feather name='plus' size={22} color={'#ccc'} />
            </View>
          </TouchableOpacity>
        )
      }

      let amount = (item.amount ?? '').split('.');
        return(
            <View style={[styles.expenseBlock, {backgroundColor: item.name == 'Food' ? Colors.blue : item.name == 'Savings' ? Colors.white : Colors.tintColor }]}>
                <Text style={[styles.expenseBlockTxt1, {color: item.name == 'Food' ? Colors.black : item.name == 'Savings' ? Colors.black : Colors.white }]}>{item.name}</Text>
                <Text style={[styles.expenseBlockTxt2, {color: item.name == 'Food' ? Colors.black : item.name == 'Savings' ? Colors.black : Colors.white } ]}>Ksh.{amount[0]}.<Text style={styles.expenseTxt2span}>{amount[1]}</Text></Text>
                <View style={styles.expenseBlockTxt3View}>
                  <Text style={[styles.expenseBlockTxt1, {color: item.name == 'Food' ? Colors.black : item.name == 'Savings' ? Colors.black : Colors.white }]}>{item.percentage}%</Text>
                </View>
            </View>
        )
    };

    const itemStatic = [{name: "Add Item"}];

  return (
    <View style={{paddingVertical: 20}}>
      <FlatList data={itemStatic.concat(expenseList)} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default ExpenseBlock

const styles = StyleSheet.create({
  addItem:{
    flex: 1,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginRight: 20,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expenseBlock:{
    backgroundColor: Colors.tintColor,
    width: 115,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  expenseBlockTxt1:{
    color: Colors.white,
    fontSize: 14
  },
  expenseBlockTxt2:{
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  expenseTxt2span:{
    fontSize: 12,
    fontWeight: '400'
  },
  expenseBlockTxt3View:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  }
})