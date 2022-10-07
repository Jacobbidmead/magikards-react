export const cardsData = [
    {
    title: 'Burn',
    image: '/images/fireball.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50,
            textValue: '50'
        },
        {
          type: 'boost',
          value: 1.35,
          textValue: '+35%'
        }
                ]
  },
	{
    title: 'Basic',
    image: '/images/sword.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50,
            textValue: '50'
        },

                ]
  },
       {
    title: 'Explosion',
    image: '/images/sword.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 2,
    effects: [
        {
            type: 'damage',
            value: 100,
            textValue: '100'
        },

                ]
  }, {
    title: 'Fire Dragon',
    image: '/images/firedragon.png',
    archetype: 'fire',
    description: 'Fire Dragon',
    energy: 3,
    effects: [
        {
            type: 'damage',
            value: 300,
            textValue: 300
        },

                ]
  }, {
    title: 'Basic Defend',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire blocked the attack',
    energy: 0,
    effects: [
        {
            type: 'defend',
            value: 0.85,
            textValue: '-15% incoming'
        },

                ]
  }, {
    title: 'Shield',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire blocked with a shield',
    energy: 1,
    effects: [
        {
            type: 'defend',
            value: 0.75,
            textValue: '-25% incoming'
        },

                ]
  },{
    title: 'Evade',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire dodged the attack',
    energy: 2,
    effects: [
        {
            type: 'defend',
            value: 0.65,
            textValue: '-35% incoming'
        },

                ]
  },
    {
    title: 'Cloak',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire evaded the attack',
    energy: 3,
    effects: [
        {
            type: 'defend',
            value: 0.50,
            textValue: '-50% incoming'
        },

                ]
  },{
    title: 'Basic boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire blocked with a shield',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50,
            textValue: '50'
        },
        {
          type: 'boost',
          value: 1.25,
          textValue: '+25% outgoing'
        }
                ]
  },
    {
    title: 'Burn boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire gained strength!',
    energy: 1,
    effects: [
        {
            type: 'damage',
            value: 50,
            textValue: '50'
        },
        {
          type: 'boost',
          value: 1.35,
          textValue: '+35% outgoing'
        }
                ]
  },
        {
    title: 'Attack boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire gained strength!',
    energy: 2,
    effects: [
        {
            type: 'damage',
            value: 200,
            textValue: '100'
        },
        {
          type: 'boost',
          value: 1.25,
          textValue: '+25% outgoing'
        }
                ]
  },
                       {
    title: 'Fire Mage',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire Mage calls fourth his legions',
    energy: 3,
    effects: [
        {
            type: 'damage',
            value: 250,
            textValue: '250'
        },
        {
          type: 'boost',
          value: 1.25,
          textValue: '+25% outgoing'
        }
                ]
  },
  {
    title: 'Frostbite',
    image: 'images/sword.png',
    archetype: 'ice',
    description: 'An brisk cold damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 80,
            textValue: '80'
        },
        {
          type: 'boost',
          value: 1.35,
          textValue: '+35% outgoing'
        }
                ]
  },
	{
	    title: 'Basic',
	    image: '/images/sword.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'damage',
	            value: 30,
                textValue: '30'
	        }
	                ]
	  },
	{
	    title: 'Cold Burn',
	    image: '/images/iceknight.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 160,
                textValue: '160'
	        }
	                ]
	  },
	{
	    title: 'ICE Dragon',
	    image: '/images/icedragon.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 200,
                textValue: '200'
	        }
	                ]
	  },
	{
	    title: 'Basic Defense',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.75,
                textValue: '-25% incoming'
	        }
	                ]
	  },
	{
	    title: 'Shield',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 2,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.65,
                textValue: '-35% incoming'
	        }
	                ]
	  },
	{
	    title: 'Evade',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.5,
                textValue: '-50% incoming'
	        }
	                ]
	  },
	{
	    title: 'Invisibility',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.3,
                textValue: '-70% incoming'
	        }
	                ]
	  },
	{
	    title: 'Basic boost',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.75,
                textValue: '-25% incoming'
	        },
	        {
	          type: 'boost',
	          value: 1.25,
              textValue: '+25% outgoing'
	        }
	                ]
	  },
	{
	    title: 'Frost boost',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.65,
                textValue: '-35% incoming'
	        },
	        {
	          type: 'boost',
	          value: 1.25,
              textValue: '+25% outgoing'
	        }
	                ]
	  },
	                 {
	    title: 'Attack & defend',
	    image: '/images/iceknight.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 150,
                textValue: '150'
	        },
	        {
	          type: 'defend',
	          value: 0.85,
              textValue: '-15% incoming'
	        }
	                ]
	  },
	                 {
	    title: 'Attack & defend',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 2,
	    effects: [
	        {
	            type: 'damage',
	            value: 30,
                textValue: '30'
	        },
	        {
	          type: 'defend',
	          value: 0.75,
              textValue: '-25% incoming'
	        }
	                ]
	  }
	]

