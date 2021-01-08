import React, {Component} from 'react';
import './CalculatorItems.css'

class Atk extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="atk">PHY/MAG ATK</label><br/>
                <input  value={this.state.stats}
                        onChange={event =>  {
                                    const stats = event.target.value;
                                    this.setState({ stats });
                                    this.props.onValueChange(stats);
                                }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class AtkIncrease extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="atkincrease">PHY/MAG ATK Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                                    const stats = event.target.value;
                                    this.setState({ stats });
                                    this.props.onValueChange(stats);
                                }
                            }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class DmgIncrease extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="dmgpercent">PHY/MAG DMG Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type ="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class BossAtk extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="bossatk">Boss ATK Increase (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                        }
                        }
                        type="number"/>
                <br/><br/>
            </div>
        )
    }
}

class SkillDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="skillpercent">Skill DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillHit extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="skillhit">Skill Hit Count</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritRate extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="critrate">Crit Rate (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="critdmg">Crit DMG (%)</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class FinalDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="finaldmg">Final DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillFinalDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="skillfinaldmg">Skill Final DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class CritAtk extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="critatk">Crit ATK</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class MaxDmg extends Component {
    constructor(props) {
        super(props);

        this.state = {stats: ''}

    }
    render() {
        return (
            <div>
                <label  for="maxdmg">Max DMG</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillCritDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="skillcritdmg">Skill Crit DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

class SkillBossDmg extends Component {
    constructor(props) {
        super(props);
        this.state = {stats: ''}
    }

    render() {
        return (
            <div>
                <label  for="skillbossdmg">Skill Boss DMG %</label><br/>
                <input  value={this.state.stats}
                        onChange={event => {
                            const stats = event.target.value;
                            this.setState({ stats });
                            this.props.onValueChange(stats);
                            }
                        }
                        type="number"
                />
                <br/><br/>
            </div>
        )
    }
}

export { Atk, AtkIncrease, DmgIncrease, BossAtk, SkillDmg, SkillHit, CritRate, CritDmg, FinalDmg, SkillFinalDmg, CritAtk, MaxDmg, SkillCritDmg, SkillBossDmg }
