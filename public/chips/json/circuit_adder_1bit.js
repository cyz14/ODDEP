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
    "x": 264,
    "y": 38,
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
    "id": "ef4a8c8a-50a1-48fc-9c1e-852a521045c2",
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
      "port": "port11"
    },
    "target": {
      "node": "3c5785b2-bde4-5072-9bc3-841ebe1ebb86",
      "port": "port13"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "d7db3605-a434-0426-ae46-c8e14b171699",
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
      "port": "port13"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "a8347e68-b10b-f70a-0b33-63b349f2d812",
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
        "x": 221.75,
        "y": 125.5
      },
      {
        "x": 221.75,
        "y": 19
      },
      {
        "x": 315,
        "y": 19
      },
      {
        "x": 315,
        "y": 39
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
      "node": "3c25d226-dfcc-7f54-1758-b7c9f8e77e92",
      "port": "port13"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "e2771b27-40f2-babc-7faa-e6d66389cd77",
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
        "x": 361,
        "y": 39
      },
      {
        "x": 361,
        "y": 19
      },
      {
        "x": 573,
        "y": 19
      },
      {
        "x": 573,
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
      "port": "port11"
    },
    "target": {
      "node": "84a1329b-06d6-3faf-83e2-38f5a1d705f8",
      "port": "Port"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "5424bd93-b1b9-3d07-42eb-b3b92ebb77d4",
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
        "x": 233.25,
        "y": 192.5
      },
      {
        "x": 233.25,
        "y": 19
      },
      {
        "x": 338,
        "y": 19
      },
      {
        "x": 338,
        "y": 39
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
      "port": "port12"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "48c0ff63-2472-d458-91c5-2022017f8131",
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
      "port": "port12"
    },
    "labels": []
  },
  {
    "type": "Connection",
    "id": "4ccbb8de-169e-67e4-549e-6a166377d988",
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
      "port": "port12"
    },
    "target": {
      "node": "5cf5a8f0-c001-92d6-6b8b-c21720bd5cdd",
      "port": "Port"
    },
    "labels": []
  }
];