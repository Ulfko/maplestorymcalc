import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MoreStats extends Component {
    render() {
        return (
            <div>
                <div className="w-75 bg-warning center ba bw2 b--black pa2 ma1 shadow-5 rounded">
                    Average Boss Non-Crit Damage Per Line: <b>{this.props.totalBossNonCritDmg}</b>
                    <br />
                    Average Boss Crit Damage Per Line: <b>{this.props.totalBossCritDmg}</b>
                    <br />
                </div>
            </div>
        )
    }
}

class DamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 ma1 pa2 rounded bg-warning">
                {<b>Non-Crit Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}</b>} Skill DMG / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.dmgIncrease}</b>} DMG Increase / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.finalDmg}</b>} Final DMG / 100) + ({<b>{this.props.skillFinalDmg}</b>} Skill Final DMG / 100) ] <FontAwesomeIcon icon="times" />
                <br />
                [ 1 + ({<b>{this.props.atkIncrease} </b>} ATK Increase / 100) ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
                <br />
                {<b>Crit Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}</b>} Skill DMG / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.dmgIncrease}</b>} DMG Increase / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.finalDmg}</b>} Final DMG / 100) + ({<b>{this.props.skillFinalDmg}</b>} Skill Final DMG / 100) ] <FontAwesomeIcon icon="times" />
                <br />
                [ 1 + ({<b>{this.props.atkIncrease} </b>} ATK Increase / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.critDmg}</b>} Crit DMG / 100) + 0.2 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
            </div>
        )
    }
}

class BossDamageFormula extends Component {
    render() {
        return (
            <div className="ba bw-3 ma1 pa2 rounded bg-warning">
                {<b>Non-Crit Boss Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}</b>} Skill DMG / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.dmgIncrease}</b>} DMG Increase / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.finalDmg}</b>} Final DMG / 100) + ({<b>{this.props.skillFinalDmg}</b>} Skill Final DMG / 100) ] <FontAwesomeIcon icon="times" />
                <br />
                [ 1 + ({<b>{this.props.atkIncrease} </b>} ATK Increase / 100) + ({<b>{this.props.skillDmg}</b>} Skill DMG / 100) + ({<b>{this.props.bossAtk}</b>} Boss ATK / 100) ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
                <br />
                <br />
                {<b>Crit Boss Damage</b>}: [ {<b>{this.props.atk}</b>} ATK ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillDmg}</b>} Skill DMG / 100 ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.dmgIncrease}</b>} DMG Increase / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.finalDmg}</b>} Final DMG / 100) + ({<b>{this.props.skillFinalDmg}</b>} Skill Final DMG / 100) ] <FontAwesomeIcon icon="times" />
                <br />
                [ 1 + ({<b>{this.props.atkIncrease} </b>} ATK Increase / 100) + ({<b>{this.props.skillDmg}</b>} Skill DMG / 100) + ({<b>{this.props.bossAtk}</b>} Boss ATK / 100) ] <FontAwesomeIcon icon="times" /> [ 1 + ({<b>{this.props.critDmg}</b>} Crit DMG / 100) + 0.2 ] <FontAwesomeIcon icon="times" /> [ {<b>{this.props.skillHit}</b>} Skill Hit ]
            </div>
        )
    }
}

export {MoreStats, DamageFormula, BossDamageFormula}
