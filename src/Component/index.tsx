import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Animated, {Easing, event, Extrapolate, interpolate, runOnJS, scrollTo, useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming} from 'react-native-reanimated'
import StyleGuide from './StyleGuide';
import {PokemonDTO} from '../dtos/PokemonDTO';
import PokemonJson from '../../assets/pokemonJson';
// import PokemonPng from '../../assets/pokemon.png'
import PokemonPng from '../../assets/pokemon.png';
import arrowDown from '../../assets/double-down-arrows.png'
import { generateRandomArray } from '../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cecec8',
    flex:1
  },
  title: {
    ...StyleGuide.typography.title2,
    fontWeight: '300',
    color: StyleGuide.palette.primary,
    textTransform: 'capitalize',
    textAlign: 'right'
  },
  section: {
    marginTop: StyleGuide.spacing * 4,
    marginBottom: StyleGuide.spacing * 2,
  },
  todo: {
    flexDirection: 'row',
    zIndex: 2,
    marginTop: -35,
    width: '80%'
  },
  label: {
    ...StyleGuide.typography.body,
  },
  checkbox: {
    width: 150,
    height: 150,
    zIndex: 1,
  },
  header: {
   height: 300,
   paddingTop: 30,
   justifyContent: 'flex-end',
   alignItems: 'center',
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   overflow: 'hidden',
   backgroundColor: '#cecec8',
  },
  avatar: { 
    height: 250,
    width: 250,
    // borderRadius: 70,
    // backgroundColor: 'rgba(0,0,0,0.2)'
  },
  viewDown: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  card: {
    height: 150,
    width: '90%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#dedede',
    marginVertical: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  arrow: {
    height: 80,
    width: 80,
  }
});

interface PokemonsProps {
  pokemon: PokemonDTO;
}
const Pokemons = ({pokemon}: PokemonsProps) => {
  const numberFromUrl = pokemon.url.split('/')[
    pokemon.url.split('/').length - 2
  ];
  const numberFormatted = `00${numberFromUrl}`.slice(-3);

  return (
    <View style={styles.card}>
      <Image style={styles.checkbox} resizeMode={'cover'} source={pokemon.image} />
      <View style={styles.todo} >
      <Text style={styles.title}>{pokemon.name}</Text>
      </View>
    </View>
  );
};

export default () => {
  const [pokemons, setPokemons] = useState<PokemonsDTO[]>([]);
  const scrollY = useSharedValue(150)
  const rotateY = useSharedValue(0)
  const bounced = useSharedValue(false)
  const scrollRef = useAnimatedRef()
  const isScrolling = useSharedValue(false);
  const decelerationRate = useSharedValue(0.9);

  useEffect(()=>{
    generateNewList()
  },[])

  const generateNewList = () => {
    const arr = generateRandomArray()
    const arrPokemons = arr.map((val) => PokemonJson[val])
    setPokemons(arrPokemons)
  }

  
  const scroll = useDerivedValue(()=>{
    if(!isScrolling.value && scrollY.value < 100) {
      scrollTo(scrollRef,0,100,true)
    }
  },[])

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: (event, context) => {
        scrollY.value = event.contentOffset.y;
      },
      onMomentumEnd: (event) => {
        isScrolling.value = false
      },
      onBeginDrag: (event) => {
        isScrolling.value = true
      }
    }
  )

  const closeTheModal = () => {
    console.log('FECHAR O MODAL IHUUU')
  }

  const derived = useDerivedValue(()=>{
    if(scrollY.value===0) {
      scrollTo(scrollRef,0,100,true)
    }
    if(scrollY.value <= 10 && !bounced.value) {
      bounced.value = true
      rotateY.value = withTiming(
        720,
        {
          duration: 3000,
        }
      )
      runOnJS(generateNewList)()
    }
    if(scrollY.value >= 450 && bounced.value) {
      bounced.value = false
      rotateY.value = 0
    }
  },[])

  const headerStyle = useAnimatedStyle(()=>{
    return {
      height: interpolate(
        scrollY.value,
        [150,450],
        [300,50],
        Extrapolate.CLAMP
      )
    }
  })

  const arrowStyle = useAnimatedStyle(()=>{
    if(!bounced.value) {
      return {
        opacity: interpolate(
          scrollY.value,
          [90, 5],
          [0,1],
          Extrapolate.CLAMP
        )
      }
    } else {
      return {
        opacity: 0
      }
    }

  })

  const animatedStyle = useAnimatedStyle(()=>{
    return {
      transform: [
        {rotateY: `${rotateY.value}deg`}
      ]
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
      
      <Animated.ScrollView 
      ref={scrollRef}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={{paddingBottom: 30, paddingTop:300, alignItems: 'center'}}
      contentOffset={{x:0, y: 100}}
      decelerationRate={0.9}
      >
        <View style={styles.viewDown}>
          <Animated.Image source={arrowDown} style={[styles.arrow, arrowStyle]} />
        </View>
      {pokemons.map((pokemon) => (
        <Pokemons pokemon={pokemon} key={pokemon.name} />
        ))}
      </Animated.ScrollView>
      
      <Animated.View  style={[styles.header, headerStyle]}>
        <Animated.Image resizeMode={'contain'} source={PokemonPng} style={[styles.avatar, animatedStyle]} />
      </Animated.View>
    </View>
  );
};
