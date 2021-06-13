import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Authentication } from './Authentication'
import { Routes } from './Routes'

export default function Provider() {
    return (
       <Authentication>
           <Routes />
       </Authentication>
    )
}

const styles = StyleSheet.create({})
