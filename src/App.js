import React, {Component} from 'react';
import {Atk, AtkIncrease, DmgIncrease, BossAtk, SkillDmg, SkillHit, CritRate, CritDmg, FinalDmg, SkillFinalDmg, CritAtk, MaxDmg, SkillCritDmg, SkillBossDmg} from './Components/CalculatorItems';
import Swal from 'sweetalert2';
import {CalculateButton, MoreStatsButton, } from './Components/Buttons';
import {DamageFormula, BossDamageFormula, MoreStats } from './Components/PopUps'
import DamageChart from './Components/DamageChart';
import Navbar from './Components/Navbar';
import style from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalculator, faTimes, faArrowRight, faCaretDown, faSave, faEdit, faSquareRootAlt} from '@fortawesome/free-solid-svg-icons'
//datos
import Buff from './Data/buff.json';
import BuffItems from './Components/BuffItems'


library.add(faCalculator, faTimes, faArrowRight, faCaretDown, faSave, faEdit, faSquareRootAlt)

console.log(Buff);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {  atk: '',
                        atkIncrease: '',
                        dmgIncrease: '',
                        bossAtk: '',
                        skillDmg: '',
                        skillHit: '',
                        critRate: '',
                        critDmg: '',
                        finalDmg: '',
                        skillFinalDmg: '',
                        critAtk: '',
                        maxDmg: '',
                        skillCritDmg: '',
                        skillBossDmg: '',
                        totalDmg: '',
                        totalCritDmg: '',
                        totalNonCritDmg: '',
                        totalBossDmg: '',
                        totalBossCritDmg: '',
                        totalBossNonCritDmg: '',
                        damageFormula: false,
                        bossDamageFormula: false,
                        moreStats: false,
                        Buff: Buff,
                        sumAtkIncrease: '',
		                sumDmgIncrease: '',
		                sumBossAtk: '',
		                sumCritRate: '',
                        sumCritDmg: '',
                      }
    }

    damageCalc = () => {
        const round = (num, places) => {
            var multiplier = Math.pow(10, places);
            return Math.round(num * multiplier) / multiplier;
        }

        let atk = this.state.atk;
        let atkIncrease = this.state.atkIncrease;
        let dmgIncrease = this.state.dmgIncrease;
        let bossAtk = this.state.bossAtk;
        let skillDmg = this.state.skillDmg;
        let skillHit = this.state.skillHit;
        let critRate = this.state.critRate;
        let critDmg = this.state.critDmg;
        let finalDmg = this.state.finalDmg;
        let skillFinalDmg = this.state.skillFinalDmg;
        let critAtk = this.state.critAtk;
        let maxDmg = this.state.maxDmg;
        let skillCritDmg = this.state.skillCritDmg;
        let skillBossDmg = this.state.skillBossDmg;
        let sumAtkIncrease = this.state.atkIncrease;
        let sumDmgIncrease = this.state.dmgIncrease;
        let sumBossAtk = this.state.bossAtk;
        let sumCritRate = this.state.critRate;
        let sumCritDmg = this.state.critDmg;

        this.state.Buff.map(buff => {
            if (buff.check) {
                console.log(buff)
                let sumAtkIncrease = (sumAtkIncrease * 1) + (buff.atkIncrease * 1);
                let sumDmgIncrease = (sumDmgIncrease * 1) + (buff.dmgIncrease * 1);
                let sumBossAtk = (sumBossAtk * 1) + (buff.bossAtk * 1);
                let sumCritRate = (sumCritRate * 1) + (buff.critRate * 1);
                let sumCritDmg = (sumCritDmg * 1) + (buff.critDmg * 1);
            }
        });
        console.log(sumBossAtk)
        
        /*
        let totalDamageWithoutCrit = (atk) * (skillDmg/100) * (1+dmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+atkIncrease/100) * (skillHit);
        let totalDamageWithCrit = ((atk*1)+(critAtk*1)) * (skillDmg/100) * (1+dmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+atkIncrease/100) * (1.2+(critDmg/100)+(skillCritDmg/100)) * (skillHit);

        let totalAverageDamage = ((1 - critRate/100) * totalDamageWithoutCrit) + ((critRate/100) * totalDamageWithCrit);
        let totalCritDamagePerLine = totalDamageWithCrit / skillHit;
        let totalNonCritDamagePerLine = totalDamageWithoutCrit / skillHit;

        let totalBossDamageWithoutCrit = (atk) * (skillDmg/100) * (1+dmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+(atkIncrease/100)+(skillDmg/100)*(bossAtk/100)) * (skillHit);
        let totalBossDamageWithCrit = ((atk*1)+(critAtk*1)) * (skillDmg/100) * (1+dmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+(atkIncrease/100)+(skillDmg/100)*((bossAtk/100)+(skillBossDmg/100))) * (1.2+(critDmg/100)+(skillCritDmg/100)) * (skillHit);

        let totalAverageBossDamage = ((1 - critRate/100) * totalBossDamageWithoutCrit) + ((critRate/100) * totalBossDamageWithCrit);
        */
        
        let totalDamageWithoutCrit = (atk) * (skillDmg/100) * (1+sumDmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+sumAtkIncrease/100) * (skillHit);
        let totalDamageWithCrit = ((atk*1)+(critAtk*1)) * (skillDmg/100) * (1+sumDmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+sumAtkIncrease/100) * (1.2+(sumCritDmg/100)+(skillCritDmg/100)) * (skillHit);

        let totalAverageDamage = ((1 - sumCritRate/100) * totalDamageWithoutCrit) + ((sumCritRate/100) * totalDamageWithCrit);
        let totalCritDamagePerLine = totalDamageWithCrit / skillHit;
        let totalNonCritDamagePerLine = totalDamageWithoutCrit / skillHit;

        let totalBossDamageWithoutCrit = (atk) * (skillDmg/100) * (1+sumDmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+(sumAtkIncrease/100)+(skillDmg/100)*(sumBossAtk/100)) * (skillHit);
        let totalBossDamageWithCrit = ((atk*1)+(critAtk*1)) * (skillDmg/100) * (1+sumDmgIncrease/100) * (1+(finalDmg/100)+(skillFinalDmg/100)) * (1+(sumAtkIncrease/100)+(skillDmg/100)*((sumBossAtk/100)+(skillBossDmg/100))) * (1.2+(sumCritDmg/100)+(skillCritDmg/100)) * (skillHit);

        let totalAverageBossDamage = ((1 - sumCritRate/100) * totalBossDamageWithoutCrit) + ((sumCritRate/100) * totalBossDamageWithCrit);
        //
        let totalCritBossDamagePerLine = totalBossDamageWithCrit / skillHit;
        let totalNonCritBossDamagePerLine = totalBossDamageWithoutCrit / skillHit;

        let totalDamageRound = round(totalAverageDamage,0);
        let totalCritDamageRound = round(totalCritDamagePerLine,0);
        let totalNonCritDamageRound = round(totalNonCritDamagePerLine,0);

        let totalBossDamageRound = round(totalAverageBossDamage,0);
        let totalBossCritDamageRound = round(totalCritBossDamagePerLine,0);
        let totalBossNonCritDamageRound = round(totalNonCritBossDamagePerLine,0);

        if (atk === "" || atkIncrease === "" || dmgIncrease ===  "" || bossAtk === '' || bossAtk === '' || dmgIncrease === '' || skillDmg === '' || skillHit === '' || critRate === '' || critDmg === '' || finalDmg === '' || skillFinalDmg === '' || critAtk === '' || maxDmg === '') {
            return Swal("Please input all stats", "", "warning");
        }

        if (critRate > 100) {
            return Swal("You can't have more than", "100% Crit Rate!", "warning")
        }

        this.setState({ totalDmg: totalDamageRound,
                        totalCritDmg: totalCritDamageRound,
                        totalNonCritDmg: totalNonCritDamageRound,
                        totalBossDmg: totalBossDamageRound,
                        totalBossCritDmg: totalBossCritDamageRound,
                        totalBossNonCritDmg: totalBossNonCritDamageRound,
        })
    }

    refreshPage = () => {
        window.location.reload();
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          this.damageCalc();
        }
    }

    toggleDamageFormula = () => {
        this.setState({damageFormula: !this.state.damageFormula})
    }

    toggleBossDamageFormula = () => {
        this.setState({bossDamageFormula: !this.state.bossDamageFormula})
    }

    toggleMoreStats = () => {
        this.setState({moreStats: !this.state.moreStats})
    }

    resetButton = () => {
        this.setState({
            atk: '',
            atkIncrease: '',
            dmgIncrease: '',
            bossAtk: '',
            skillDmg: '',
            skillHit: '',
            critRate: '',
            critDmg: '',
            finalDmg: '',
            skillFinalDmg: '',
            critAtk: '',
            maxDmg: '',
            skillCritDmg: '',
            skillBossDmg: '',
            totalDmg: '',
            totalCritDmg: '',
            totalNonCritDmg: '',
            totalBossDmg: '',
            totalBossCritDmg: '',
            totalBossNonCritDmg: '',
        })
    }

    checkBuff = id => {
            console.log(id)
            const newBuff = this.state.Buff.map(buff => {
                if (buff.id === id ) {
                    buff.check = !buff.check
                }
                return buff;
            });
            this.setState({Buff: newBuff})
    }

    render() {
        const show = (this.state.damageFormula) ? "show" : "" ;
        const hi = (this.state.moreStats) ? "show" : "" ;
        return (
            <div>
                 
                <div className="nowrap">
                    <Navbar />
                </div>
                <div className="bg-near-black mt2">
                <div className="bg-black-50 w-90 tc center rounded">
                <div className="tc w-100 h-100 p-2">
                    <MoreStatsButton toggleMoreStats={this.toggleMoreStats} toggleDamageFormula={this.toggleDamageFormula}/>
                    <div className={"collapse navbar-collapse " + show}>
                            <DamageFormula
                                atk={this.state.atk}
                                atkIncrease={this.state.atkIncrease}
                                dmgIncrease={this.state.dmgIncrease}
                                bossAtk={this.state.bossAtk}
                                skillDmg={this.state.skillDmg}
                                skillHit={this.state.skillHit}
                                critRate={this.state.critRate}
                                critDmg={this.state.critDmg}
                                finalDmg={this.state.finalDmg}
                                skillFinalDmg={this.state.skillFinalDmg}
                                critAtk={this.state.critAtk}
                                maxDmg={this.state.maxDmg}
                                skillCritDmg={this.state.skillCritDmg}
                                skillBossDmg={this.state.skillBossDmg}
                            />
                    </div>
                    <div className={"collapse navbar-collapse " + show}>
                            <BossDamageFormula
                                atk={this.state.atk}
                                atkIncrease={this.state.atkIncrease}
                                dmgIncrease={this.state.dmgIncrease}
                                bossAtk={this.state.bossAtk}
                                skillDmg={this.state.skillDmg}
                                skillHit={this.state.skillHit}
                                critRate={this.state.critRate}
                                critDmg={this.state.critDmg}
                                finalDmg={this.state.finalDmg}
                                skillFinalDmg={this.state.skillFinalDmg}
                                critAtk={this.state.critAtk}
                                maxDmg={this.state.maxDmg}
                                skillCritDmg={this.state.skillCritDmg}
                                skillBossDmg={this.state.skillBossDmg}
                            />
                    </div>
                </div>
                    <div className="tc">
                        <DamageChart
                            totalDmg={this.state.totalDmg}
                            totalNonCritDmg={this.state.totalNonCritDmg}
                            totalCritDmg={this.state.totalCritDmg}
                        />
                        <div className={"collapse navbar-collapse " + hi}>
                        <MoreStats
                            totalBossDmg={this.state.totalBossDmg}
                            totalBossNonCritDmg={this.state.totalBossNonCritDmg}
                            totalBossCritDmg={this.state.totalBossCritDmg}
                        />
                        </div>
                    </div>
                    <hr style={{borderColor: "grey"}}/>
                <form className="form-group m-2 p-2" onKeyPress={this._handleKeyPress}>
                    <div className="row justify-content-center">
                        <div className="col col-lg-3 text-center">
                            <Atk onValueChange={atk => this.setState({ atk })}/>
                            <AtkIncrease onValueChange={atkIncrease => this.setState({ atkIncrease })}/>
                            <DmgIncrease onValueChange={dmgIncrease => this.setState({ dmgIncrease })}/>
                        </div>
                        <div className="col col-lg-3 text-center">
                            <CritRate onValueChange={critRate => this.setState({ critRate })}/>
                            <CritDmg onValueChange={critDmg => this.setState({ critDmg })}/>
                            <CritAtk onValueChange={critAtk => this.setState({ critAtk })}/>
                        </div>
                        <div className="col col-lg-3 text-center">
                            <BossAtk onValueChange={bossAtk => this.setState({ bossAtk })}/>
                            <FinalDmg onValueChange={finalDmg => this.setState({ finalDmg })}/>
                            <MaxDmg onValueChange={maxDmg => this.setState({ maxDmg })}/>
                        </div>
                    </div>
                    <hr style={{borderColor: "grey"}}/>
                    <div className="row justify-content-center">
                        <div className="col col-lg-3 text-center">
                            <SkillDmg onValueChange={skillDmg => this.setState({ skillDmg })}/>
                            <SkillHit onValueChange={skillHit => this.setState({ skillHit })}/>
                        </div>
                        <div className="col col-lg-3 text-center">
                            <SkillCritDmg onValueChange={skillCritDmg => this.setState({ skillCritDmg })}/>
                            <SkillBossDmg onValueChange={skillBossDmg => this.setState({ skillBossDmg })}/>
                            <SkillFinalDmg onValueChange={skillFinalDmg => this.setState({ skillFinalDmg })}/>
                        </div>
                    </div>
                    <hr style={{borderColor: "grey"}}/>
                    <div className="row justify-content-center"> 
                        <div className="col col-lg-3 text-center">
                            <label style={{color: "white"}}>Buff item : </label>  <BuffItems Buff={this.state.Buff} checkBuff={this.checkBuff}/>
                        </div>
                    </div>
                    <hr style={{borderColor: "grey"}}/>
                    <div className="tc">
                        <CalculateButton damageCalc={this.damageCalc}/>
                    </div>
                </form>
            </div>
            </div>
        </div>
        )
    }
}

export default App;
