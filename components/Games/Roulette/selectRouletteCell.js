const cd = 360/37;

const selectRouletteCell = (degrees) => {
  if (degrees < 360/37)
    return 'blue';
  if (degrees < cd*2)
    return 'black';
  if (degrees < cd*3)
    return 'red';
  if (degrees < cd*4)
    return 'black';
  if (degrees < cd*5)
    return 'red';
  if (degrees < cd*6)
    return 'black';
  if (degrees < cd*7)
    return 'red';
  if (degrees < cd*8)
    return 'black';
  if (degrees < cd*9)
    return 'red';
  if (degrees < cd*10)
    return 'black';
  if (degrees < cd*11)
    return 'red';
  if (degrees < cd*12)
    return 'black';
  if (degrees < cd*13)
    return 'red';
  if (degrees < cd*14)
    return 'black';
  if (degrees < cd*15)
    return 'red';
  if (degrees < cd*16)
    return 'black';
  if (degrees < cd*17)
    return 'red';
  if (degrees < cd*18)
    return 'black';
  if (degrees < cd*19)
    return 'red';
  if (degrees < cd*20)
    return 'black';
  if (degrees < cd*21)
    return 'red';
  if (degrees < cd*22)
    return 'black';
  if (degrees < cd*23)
    return 'red';
  if (degrees < cd*24)
    return 'black';
  if (degrees < cd*25)
    return 'red';
  if (degrees < cd*26)
    return 'black';
  if (degrees < cd*27)
    return 'red';
  if (degrees < cd*28)
    return 'black';
  if (degrees < cd*29)
    return 'red';
  if (degrees < cd*30)
    return 'black';
  if (degrees < cd*31)
    return 'red';
  if (degrees < cd*32)
    return 'black';
  if (degrees < cd*33)
    return 'red';
  if (degrees < cd*34)
    return 'black';
  if (degrees < cd*35)
    return 'red';
  if (degrees < cd*36)
    return 'black';
  if (degrees < 360)
    return 'red';
}

export default selectRouletteCell;