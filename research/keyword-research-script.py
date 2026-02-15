#!/usr/bin/env python3
"""
Keyword Research Script for sermon-clips.com
Uses SerpAPI (Google Ads Keyword Planner endpoint) as alternative to DataForSEO
"""

import os
import json
import csv
import time
from datetime import datetime
import requests
from typing import List, Dict, Any

# API Configuration
SERPAPI_KEY = os.environ.get('SERPAPI_API_KEY')

# Research clusters
KEYWORD_CLUSTERS = {
    'core': [
        'sermon clips',
        'sermon clipping',
        'sermon video editing',
        'sermon repurposing',
        'church video clips',
        'sermon highlights',
        'sermon social media'
    ],
    'tools': [
        'sermon clip maker',
        'sermon editing software',
        'church video editor',
        'sermon transcription tool',
        'ai sermon clips',
        'automated sermon clips',
        'sermon clip generator'
    ],
    'use_cases': [
        'how to clip sermons',
        'sermon clips for tiktok',
        'sermon clips for instagram',
        'sermon clips for youtube shorts',
        'church social media content',
        'repurpose sermons for social media',
        'church content creation'
    ],
    'pain_points': [
        'church video editing takes too long',
        'how to grow church social media',
        'church media team burnout',
        'volunteer media team church',
        'church social media strategy'
    ],
    'church_marketing': [
        'church digital marketing',
        'church online presence',
        'church growth social media',
        'how to reach more people church',
        'church outreach online',
        'digital evangelism'
    ],
    'competitors': [
        'socialsermons alternative',
        'pro church tools alternative',
        'sermon video service',
        'church media service',
        'church content agency'
    ],
    'free_tools': [
        'free sermon transcription',
        'free sermon clipper',
        'sermon timestamp generator',
        'bible verse generator',
        'sermon outline generator',
        'church social media calendar',
        'sermon illustration finder',
        'worship background generator',
        'church announcement maker',
        'sermon quote generator',
        'bible study discussion questions generator'
    ],
    'long_tail': [
        'how to create sermon clips for social media',
        'best sermon clips on tiktok',
        'how to grow church with social media',
        'how long should sermon clips be',
        'what makes a good sermon clip'
    ]
}

def get_keyword_data_serpapi(keywords: List[str]) -> List[Dict[str, Any]]:
    """Get keyword data using SerpAPI Google Ads endpoint"""
    results = []
    
    # SerpAPI Google Ads Keyword Ideas endpoint
    for keyword in keywords:
        try:
            url = "https://serpapi.com/search.json"
            params = {
                "engine": "google_ads",
                "q": keyword,
                "api_key": SERPAPI_KEY,
                "location": "United States"
            }
            
            print(f"Fetching data for: {keyword}")
            response = requests.get(url, params=params)
            
            if response.status_code == 200:
                data = response.json()
                
                # Extract keyword metrics
                keyword_data = {
                    'keyword': keyword,
                    'search_volume': data.get('search_volume', 0),
                    'cpc': data.get('cpc', 0),
                    'competition': data.get('competition', 'N/A'),
                    'competition_index': data.get('competition_index', 0),
                    'related_keywords': []
                }
                
                # Get related keywords if available
                if 'related_keywords' in data:
                    keyword_data['related_keywords'] = [
                        {
                            'keyword': kw.get('keyword', ''),
                            'search_volume': kw.get('search_volume', 0),
                            'cpc': kw.get('cpc', 0)
                        }
                        for kw in data['related_keywords'][:10]
                    ]
                
                results.append(keyword_data)
            else:
                print(f"Error fetching {keyword}: {response.status_code}")
                # Add placeholder data
                results.append({
                    'keyword': keyword,
                    'search_volume': 'N/A',
                    'cpc': 'N/A',
                    'competition': 'N/A',
                    'competition_index': 'N/A',
                    'related_keywords': [],
                    'error': f"API Error: {response.status_code}"
                })
            
            # Rate limiting
            time.sleep(1.5)
            
        except Exception as e:
            print(f"Exception for {keyword}: {str(e)}")
            results.append({
                'keyword': keyword,
                'search_volume': 'N/A',
                'cpc': 'N/A',
                'competition': 'N/A',
                'competition_index': 'N/A',
                'related_keywords': [],
                'error': str(e)
            })
    
    return results

def get_keyword_suggestions(seed_keyword: str) -> List[Dict[str, Any]]:
    """Get keyword suggestions using Google Autocomplete via SerpAPI"""
    try:
        url = "https://serpapi.com/search.json"
        params = {
            "engine": "google_autocomplete",
            "q": seed_keyword,
            "api_key": SERPAPI_KEY
        }
        
        response = requests.get(url, params=params)
        
        if response.status_code == 200:
            data = response.json()
            suggestions = data.get('suggestions', [])
            return [{'keyword': s.get('value', '')} for s in suggestions]
        
    except Exception as e:
        print(f"Error getting suggestions for {seed_keyword}: {str(e)}")
    
    return []

def research_all_clusters():
    """Research all keyword clusters"""
    all_results = {}
    
    for cluster_name, keywords in KEYWORD_CLUSTERS.items():
        print(f"\n{'='*60}")
        print(f"Researching cluster: {cluster_name}")
        print(f"{'='*60}")
        
        cluster_results = get_keyword_data_serpapi(keywords)
        all_results[cluster_name] = cluster_results
        
        # Save intermediate results
        with open(f'/home/ec2-user/clawd/projects/sermon-clips/research/raw-data-{cluster_name}.json', 'w') as f:
            json.dump(cluster_results, f, indent=2)
        
        print(f"Completed {cluster_name}: {len(cluster_results)} keywords")
        time.sleep(2)  # Be nice to the API
    
    return all_results

def save_results(all_results: Dict[str, List[Dict[str, Any]]]):
    """Save results to JSON"""
    output_file = '/home/ec2-user/clawd/projects/sermon-clips/research/keyword-research-raw.json'
    
    with open(output_file, 'w') as f:
        json.dump({
            'generated_at': datetime.now().isoformat(),
            'api_source': 'SerpAPI (Google Ads)',
            'note': 'DataForSEO credentials not available - used SerpAPI as alternative',
            'clusters': all_results
        }, f, indent=2)
    
    print(f"\nResults saved to: {output_file}")

def create_csv_export(all_results: Dict[str, List[Dict[str, Any]]]):
    """Create CSV export"""
    csv_file = '/home/ec2-user/clawd/projects/sermon-clips/research/keyword-master-list.csv'
    
    with open(csv_file, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['keyword', 'volume', 'cpc', 'competition', 'cluster', 'priority'])
        
        for cluster_name, results in all_results.items():
            for result in results:
                volume = result.get('search_volume', 'N/A')
                cpc = result.get('cpc', 'N/A')
                competition = result.get('competition', 'N/A')
                
                # Calculate priority (placeholder logic)
                priority = 'medium'
                if volume != 'N/A' and cpc != 'N/A':
                    try:
                        if int(volume) > 1000 and float(cpc) > 1.0:
                            priority = 'high'
                        elif int(volume) < 100:
                            priority = 'low'
                    except:
                        pass
                
                writer.writerow([
                    result.get('keyword', ''),
                    volume,
                    cpc,
                    competition,
                    cluster_name,
                    priority
                ])
    
    print(f"CSV exported to: {csv_file}")

if __name__ == '__main__':
    print("Starting keyword research for sermon-clips.com")
    print(f"Using SerpAPI (Google Ads)")
    print(f"Total clusters: {len(KEYWORD_CLUSTERS)}")
    print(f"Total seed keywords: {sum(len(kws) for kws in KEYWORD_CLUSTERS.values())}")
    
    # Research all clusters
    all_results = research_all_clusters()
    
    # Save results
    save_results(all_results)
    create_csv_export(all_results)
    
    print("\n" + "="*60)
    print("Keyword research complete!")
    print("="*60)
