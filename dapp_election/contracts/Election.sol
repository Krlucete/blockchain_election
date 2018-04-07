pragma solidity ^0.4.19;

contract Election {
	// Model a Candidate
	struct Candidate {
		uint id;
		string party;
		string name;
		uint voteCount;
	}

	// Store accounts that have voted
	mapping(address => bool) public voters;
	// Fetch Candidate
	// Fetch Candidate
	mapping(uint => Candidate) public candidates;
	// Store Candidates Count
	uint public candidatesCount;

	// voted event
	event votedEvent (
		uint indexed _candidateId
	);

	// Constructor
	function Election () public {
		addCandidate("더불어민주당","문 재 인");
		addCandidate("자유한국당","홍 준 표");
		addCandidate("국민의당","안 철 수");
	}
	
	function addCandidate (string _party, string _name) private {
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount, _party, _name, 0);
	}

	function vote (uint _candidateId) public {

		// update candidate vote Count
		candidates[_candidateId].voteCount ++;

		// trigger voted event
		votedEvent(_candidateId);

	}
}