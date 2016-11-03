var circuit_adder_1bit = [
  {
    "type": "draw2d_circuit_switch_HighLow",
    "id": "0812e1cb-9408-e884-0ad6-21afd67dec00",
    "x": 87,
    "y": 103,
    "width": 42,
    "height": 43.5,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_circuit_switch_HighLow",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "draw2d_circuit_switch_HighLow",
    "id": "bd35fc8c-eb03-3cce-9268-00b63fa8dce7",
    "x": 87,
    "y": 170,
    "width": 42,
    "height": 43.5,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_circuit_switch_HighLow",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "C74LS86",
    "id": "3c25d226-dfcc-7f54-1758-b7c9f8e77e92",
    "x": 247,
    "y": 36,
    "width": 184,
    "height": 70,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "C74LS86",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "draw2d_circuit_display_Led",
    "id": "84a1329b-06d6-3faf-83e2-38f5a1d705f8",
    "x": 786,
    "y": 57,
    "width": 30,
    "height": 32,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_circuit_display_Led",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "C74LS04",
    "id": "3c5785b2-bde4-5072-9bc3-841ebe1ebb86",
    "x": 514,
    "y": 274,
    "width": 193,
    "height": 70,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "C74LS04",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "C74LS00",
    "id": "86320dc9-b189-64be-f031-5e54bb69dae4",
    "x": 251,
    "y": 203,
    "width": 184,
    "height": 70,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "C74LS00",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "draw2d_circuit_display_Led",
    "id": "5cf5a8f0-c001-92d6-6b8b-c21720bd5cdd",
    "x": 786,
    "y": 176,
    "width": 30,
    "height": 32,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_circuit_display_Led",
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "labels": []
  },
  {
    "type": "Connection",
    "id": "64500ba6-ed3d-71aa-91d0-de568af90532",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 128.5,
        "y": 192.5
      },
      {
        "x": 325,
        "y": 192.5
      },
      {
        "x": 325,
        "y": 204
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "bd35fc8c-eb03-3cce-9268-00b63fa8dce7",
      "port": "Port"
    },
    "target": {
      "node": "86320dc9-b189-64be-f031-5e54bb69dae4",
      "port": "12"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "6ed0a05d-def4-29ea-b168-fe1b1a1cebfb",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 128.5,
        "y": 192.5
      },
      {
        "x": 224.75,
        "y": 192.5
      },
      {
        "x": 224.75,
        "y": 17
      },
      {
        "x": 321,
        "y": 17
      },
      {
        "x": 321,
        "y": 37
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "bd35fc8c-eb03-3cce-9268-00b63fa8dce7",
      "port": "Port"
    },
    "target": {
      "node": "3c25d226-dfcc-7f54-1758-b7c9f8e77e92",
      "port": "12"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "793d116b-720f-23cc-8c9d-12adb4709419",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 128.5,
        "y": 125.5
      },
      {
        "x": 302,
        "y": 125.5
      },
      {
        "x": 302,
        "y": 204
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "0812e1cb-9408-e884-0ad6-21afd67dec00",
      "port": "Port"
    },
    "target": {
      "node": "86320dc9-b189-64be-f031-5e54bb69dae4",
      "port": "13"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "e3fd0566-32e5-93d8-134d-45d254a31748",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 128.5,
        "y": 125.5
      },
      {
        "x": 214.25,
        "y": 125.5
      },
      {
        "x": 214.25,
        "y": 9
      },
      {
        "x": 298,
        "y": 9
      },
      {
        "x": 298,
        "y": 37
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": true,
      "fromDir": 1,
      "toDir": 0
    },
    "source": {
      "node": "0812e1cb-9408-e884-0ad6-21afd67dec00",
      "port": "Port"
    },
    "target": {
      "node": "3c25d226-dfcc-7f54-1758-b7c9f8e77e92",
      "port": "13"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "d34d7578-a921-1cfe-537b-d87cb84284b3",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 344,
        "y": 37
      },
      {
        "x": 344,
        "y": 17
      },
      {
        "x": 564.5,
        "y": 17
      },
      {
        "x": 564.5,
        "y": 73.5
      },
      {
        "x": 785,
        "y": 73.5
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 0,
      "toDir": 3
    },
    "source": {
      "node": "3c25d226-dfcc-7f54-1758-b7c9f8e77e92",
      "port": "11"
    },
    "target": {
      "node": "84a1329b-06d6-3faf-83e2-38f5a1d705f8",
      "port": "Port"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "5e80dc65-e983-892d-9e18-914d3fa22b13",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 348,
        "y": 204
      },
      {
        "x": 348,
        "y": 184
      },
      {
        "x": 568.5,
        "y": 184
      },
      {
        "x": 568.5,
        "y": 277
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 0,
      "toDir": 0
    },
    "source": {
      "node": "86320dc9-b189-64be-f031-5e54bb69dae4",
      "port": "11"
    },
    "target": {
      "node": "3c5785b2-bde4-5072-9bc3-841ebe1ebb86",
      "port": "Port"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "17cd4aa9-bca0-7241-db64-b020b2aa73ee",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "Connection",
    "stroke": 1.5,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "ConnectionSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 592,
        "y": 277
      },
      {
        "x": 592,
        "y": 192.5
      },
      {
        "x": 785,
        "y": 192.5
      }
    ],
    "router": "ConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 0,
      "toDir": 3
    },
    "source": {
      "node": "3c5785b2-bde4-5072-9bc3-841ebe1ebb86",
      "port": "Port"
    },
    "target": {
      "node": "5cf5a8f0-c001-92d6-6b8b-c21720bd5cdd",
      "port": "Port"
    },
    "labels": []
  }
];